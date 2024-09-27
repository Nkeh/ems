package com.interns.ems.exception;

import lombok.*;


@Data
@EqualsAndHashCode
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class ErrorResponse {
    private String code;
    private String message;
    private String endpoint;
}
