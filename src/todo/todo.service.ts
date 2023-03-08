import { Injectable } from "@nestjs/common/decorators";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Todos } from "./entities/todo.entity";
import { CreateDto } from "./dtos/create.dto";
import { UpdateDto } from "./dtos/update.dto";

@Injectable()
export class TodoService {
  constructor(@InjectRepository(Todos) private readonly todoRepo: Repository<Todos>){}
  async showAllTodos() {

  }
  async showActiveTodos() {
    
  }
  async showDoneTodos() {
    
  }
  async createTodo(createDto: CreateDto) {
    console.log('asdasdas')
    return this.todoRepo.save(createDto)

  }
  async updateTodo(id: number, updateDto: UpdateDto) {
    const todo = await this.todoRepo.findOne({where: {id: id}});
    // return console.log(todo)
    const updated = await Object.assign(todo, updateDto)
    // console.log(updated)
    return updated;
    // return this.todoRepo.save(updated)
    // return todo;
  }
  async deleteTodo() {
    
  }
}