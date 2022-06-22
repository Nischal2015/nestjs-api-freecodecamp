import { INestApplication, ValidationPipe } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { AppModule } from '../src/app.module';
import * as pactum from 'pactum';
import { PrismaService } from '../src/prisma/prisma.service';
import { AuthDto } from '../src/auth/dto';
import { EditUserDto } from '../src/user/dto';

describe('App Module Test', () => {
  let app: INestApplication;
  let prisma: PrismaService;
  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();
    app = moduleFixture.createNestApplication();
    app.useGlobalPipes(
      new ValidationPipe({
        whitelist: true,
      }),
    );
    await app.init();
    await app.listen(3333);

    prisma = app.get<PrismaService>(PrismaService);
    await prisma.cleanDb();
    pactum.request.setBaseUrl('http://localhost:3333');
  });

  afterAll(() => {
    app.close();
  });

  describe('AuthService', () => {
    const body: AuthDto = {
      email: 'nischalshakya2015@gmail.com',
      password: 'password',
    };
    describe('Signup', () => {
      it('Should throw an error if email is empty', () => {
        return pactum
          .spec()
          .post('/auth/signup')
          .withBody({ email: body.email })
          .expectStatus(400);
      });

      it('Should throw an error if password is empty', () => {
        return pactum
          .spec()
          .post('/auth/signup')
          .withBody({ password: body.password })
          .expectStatus(400);
      });

      it('Should throw an error if both are empty', () => {
        return pactum.spec().post('/auth/signup').expectStatus(400);
      });

      it('Should signup', () => {
        return pactum
          .spec()
          .post('/auth/signup')
          .withBody(body)
          .expectStatus(201);
      });
    });

    describe('Signin', () => {
      it('Should not to able to signin if email is empty', () => {
        return pactum
          .spec()
          .post('/auth/signin')
          .withBody({ email: body.email })
          .expectStatus(400);
      });

      it('Should not to able to signin if password is empty', () => {
        return pactum
          .spec()
          .post('/auth/signin')
          .withBody({ password: body.password })
          .expectStatus(400);
      });

      it('Should throw an error if both are empty', () => {
        return pactum.spec().post('/auth/signup').expectStatus(400);
      });

      it('Should signin', () => {
        return pactum
          .spec()
          .post('/auth/signin')
          .withBody(body)
          .expectStatus(200)
          .stores('accessToken', 'access_token');
      });
    });
  });

  describe('users', () => {
    describe('Get me', () => {
      it('Should get current user', () => {
        return pactum
          .spec()
          .get('/users/me')
          .withHeaders({ Authorization: 'Bearer $S{accessToken}' });
      });
    });

    describe('Edit user', () => {
      it('Should edit user', () => {
        const dto: EditUserDto = {
          firstName: 'John',
          email: 'johndoe@gmail.com',
        };
        return pactum
          .spec()
          .patch('/users')
          .withHeaders({ Authorization: 'Bearer $S{accessToken}' })
          .withBody(dto)
          .expectStatus(200)
          .expectBodyContains(dto.firstName)
          .expectBodyContains(dto.email);
      });
    });
  });

  describe('BookMarks', () => {
    describe('Get bookmarks', () => {});

    describe('Create bookmark', () => {});

    describe('Get bookmark by id', () => {});

    describe('Edit bookmark', () => {});

    describe('Delete bookmark by id', () => {});
  });
});
