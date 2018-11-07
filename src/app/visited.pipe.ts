import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'visited'
})
export class VisitedPipe implements PipeTransform {

	transform(value: any, args?: any): any {
		if( args == 'all' ) return value;
		if( args == 'not_visited' ) return value.filter((item)=> ! item.visited);
		if( args == 'visited' ) return value.filter((item)=> item.visited);
	}

}
