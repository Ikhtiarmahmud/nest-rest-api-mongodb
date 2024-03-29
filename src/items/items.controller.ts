import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { CreateItemDto } from './dto/create_item.dto';
import { ItemsService } from './items.service';
import { Item } from '../interfaces/item.interface'; // for the item type/interface

@Controller('items')
export class ItemsController {

    constructor(private readonly itemService: ItemsService) {}

    @Get()
    findAll(): Promise<Item[]> {
        return this.itemService.findAll();
    }

    @Get(':id')
    findOne(@Param() param): Promise<Item> {
        return this.itemService.findOne(param.id);
    }

    @Post()
    create(@Body() createItemDto: CreateItemDto): Promise<Item> {
        return this.itemService.create(createItemDto);
    }

    @Delete(':id')
    delete(@Param('id') param): Promise<Item> {
        return this.itemService.delete(param);
    }

    @Put(':id')
    update(@Body() updateItemDto: CreateItemDto, @Param('id') param) : Promise<Item> {
        return this.itemService.update(param, updateItemDto);
    }
}
