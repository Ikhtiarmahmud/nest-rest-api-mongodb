import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemsController } from './items/items.controller';
import { ItemsService } from './items/items.service';
import { ItemModule } from './items/items.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ItemSchema } from './items/schemas/item.schema';
import config from './config/keys';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Item', schema: ItemSchema } ]), MongooseModule.forRoot(config.MONGO_URI)],
  controllers: [AppController, ItemsController],
  providers: [AppService, ItemsService],
})
export class AppModule {}
