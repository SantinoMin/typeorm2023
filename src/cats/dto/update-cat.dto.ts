import { PartialType } from '@nestjs/mapped-types';
import { CreateCatDto } from './create-cat.dto';

//PartialType(CreateCatDto) 뜻은?
// CreateCatDto가 부분적으로 들어와도 사용 가능하다는 뜻
export class UpdateCatDto extends PartialType(CreateCatDto) {}
