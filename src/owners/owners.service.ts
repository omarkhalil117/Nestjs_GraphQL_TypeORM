import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateOwnerInput } from './dto/create-owner.input';
import { UpdateOwnerInput } from './dto/update-owner.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Owner } from './entities/owner.entity';

@Injectable()
export class OwnersService {

  constructor(@InjectRepository(Owner) private ownerRepository: Repository<Owner>) { }

  create(createOwnerInput: CreateOwnerInput) {
    try {
      const newOwner = this.ownerRepository.create(createOwnerInput);
      return this.ownerRepository.save(newOwner);
    } catch (e) {
      throw new BadRequestException(e, 'Failed to add the owner');
    }
  }

  findAll() {
    return this.ownerRepository.find();
  }

  findOne(id: number) {
    return this.ownerRepository.findOneByOrFail({ id });
  }

  update(id: number, updateOwnerInput: UpdateOwnerInput) {
    return `This action updates a #${id} owner`;
  }

  remove(id: number) {
    return `This action removes a #${id} owner`;
  }
}
