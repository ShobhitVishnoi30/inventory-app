import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { apiResponse } from 'src/Interfaces/api-response.interface';
@Injectable()
export class ResponseHandlerService {
  async response(error, statusCode, message, data) {
    let response: apiResponse;

    if (error) {
      response = {
        status: false,
        statusCode: statusCode,
        error: error,
      };
      switch (parseInt(statusCode)) {
        case HttpStatus.AMBIGUOUS: {
          throw new HttpException(response, HttpStatus.AMBIGUOUS);
        }
        case HttpStatus.BAD_GATEWAY: {
          throw new HttpException(response, HttpStatus.BAD_GATEWAY);
        }
        case HttpStatus.BAD_REQUEST: {
          throw new HttpException(response, HttpStatus.BAD_REQUEST);
        }
        case HttpStatus.CONFLICT: {
          throw new HttpException(response, HttpStatus.CONFLICT);
        }
        case HttpStatus.EXPECTATION_FAILED: {
          throw new HttpException(response, HttpStatus.EXPECTATION_FAILED);
        }
        case HttpStatus.FAILED_DEPENDENCY: {
          throw new HttpException(response, HttpStatus.FAILED_DEPENDENCY);
        }
        case HttpStatus.FORBIDDEN: {
          throw new HttpException(response, HttpStatus.FORBIDDEN);
        }
        case HttpStatus.GATEWAY_TIMEOUT: {
          throw new HttpException(response, HttpStatus.GATEWAY_TIMEOUT);
        }
        case HttpStatus.HTTP_VERSION_NOT_SUPPORTED: {
          throw new HttpException(
            response,
            HttpStatus.HTTP_VERSION_NOT_SUPPORTED,
          );
        }
        case HttpStatus.INTERNAL_SERVER_ERROR: {
          throw new HttpException(response, HttpStatus.INTERNAL_SERVER_ERROR);
        }
        case HttpStatus.NOT_FOUND: {
          throw new HttpException(response, HttpStatus.NOT_FOUND);
        }
        case HttpStatus.REQUEST_TIMEOUT: {
          throw new HttpException(response, HttpStatus.REQUEST_TIMEOUT);
        }
        case HttpStatus.UNAUTHORIZED: {
          throw new HttpException(response, HttpStatus.UNAUTHORIZED);
        }
        case HttpStatus.UNSUPPORTED_MEDIA_TYPE: {
          throw new HttpException(response, HttpStatus.UNSUPPORTED_MEDIA_TYPE);
        }
        case HttpStatus.SERVICE_UNAVAILABLE: {
          throw new HttpException(response, HttpStatus.SERVICE_UNAVAILABLE);
        }
        case HttpStatus.UNAUTHORIZED: {
          throw new HttpException(response, HttpStatus.UNAUTHORIZED);
        }
        case HttpStatus.UNAUTHORIZED: {
          throw new HttpException(response, HttpStatus.UNAUTHORIZED);
        }
        default: {
          throw new HttpException(response, parseInt(statusCode));
        }
      }
    }
    response = {
      status: true,
      statusCode: statusCode,
      message: message,
      data: data,
    };

    return response;
  }
}