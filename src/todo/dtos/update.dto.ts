import { ApiProperty } from "@nestjs/swagger/dist";

export class UpdateDto {
    @ApiProperty({default: 'write your task'})
    task: string;
    @ApiProperty({default: false})
    status: boolean;
}