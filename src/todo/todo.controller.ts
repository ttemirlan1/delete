import { Controller, Delete, Get, Injectable, Patch, Post } from "@nestjs/common/decorators";
import { TodoService } from "./todo.service";
import { CreateDto } from "./dtos/create.dto";
import { Body, Param } from "@nestjs/common/decorators/http/route-params.decorator";
import { UpdateDto } from "./dtos/update.dto";
import { Todos } from "./entities/todo.entity";

@Controller('tasks')
export class TodoController {
  constructor(private todoService: TodoService){}
  @Get()
  async showAllTodos() {
    return await this.todoService.showAllTodos()
  }
  @Get()
  async showActiveTodos() {
    return await this.todoService.showActiveTodos()
  }
  @Get()
  async showDoneTodos() {
    return await this.todoService.showDoneTodos()
  }
  @Post('create')
  async createTodo(@Body() createDto: CreateDto) {
    console.log('todo')
    return await this.todoService.createTodo(createDto)
  }
  @Patch(':id')
  async updateTodo(@Param('id') id: number, @Body() updateTodo: UpdateDto) {
    return await this.todoService.updateTodo(id, updateTodo)
  }
  @Delete()
  async deleteTodo() {
    return await this.todoService.deleteTodo()
  }
}