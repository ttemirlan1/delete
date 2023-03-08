import { ApiProperty } from "@nestjs/swagger/dist/decorators";

export class CreateDto {
    @ApiProperty()
    task: string;
    @ApiProperty()
    status: boolean;
}