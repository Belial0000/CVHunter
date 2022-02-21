import {IsEmail, IsNotEmpty, Length, MinLength} from "class-validator";

export class CreateUserDto {
    @IsNotEmpty()
    @IsEmail(undefined, { message: 'Неверная почта' })
    readonly email: string;

    @IsNotEmpty()
    @MinLength(3)
    readonly firstName: string;

    @IsNotEmpty()
    @MinLength(3)
    readonly lastName: string;

    @Length(2, 32, { message: 'Пароль должен быть минимум из 2 символов'})
    readonly password: string;

    readonly birthDate: string;
    readonly sex: string;
    readonly phoneNumber: string;
    readonly postAdr: string;
    readonly postIndex: string;
    readonly city: string;
    readonly placeOfBirth: string;
    readonly familyStatus: string;
    readonly citizenship: string;
    readonly linkedIn: string;
    readonly website: string;
    readonly photo: string;
    readonly isActive: boolean;
}
