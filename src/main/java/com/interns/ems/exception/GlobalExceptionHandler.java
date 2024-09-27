package com.interns.ems.exception;

import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import javax.servlet.http.HttpServletRequest;


@ControllerAdvice
@Slf4j
public class GlobalExceptionHandler extends Throwable {
    @ExceptionHandler(value = {com.interns.ems.exception.ApiException.class})
    public ResponseEntity<ErrorResponse> handleApiException(ApiException ex, HttpServletRequest request) {
        return new ResponseEntity<>(new ErrorResponse(ex.getErrorCode(),ex.getMessage(),request.getRequestURI()), ex.getHttpStatus());
    }
}
