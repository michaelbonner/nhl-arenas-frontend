import { Component } from '@angular/core';
import { Arena } from './arena';
import { VisitedPipe } from './visited.pipe';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
})
export class AppComponent {
	title: string = 'Development: Keeping Track of NHL Arenas';
	logo: string = 'assets/img/logos/nhl.svg';
	lat: number = 42.7870988;
	lng: number = -96.4611001;
	zoom: number = 4;
	disableDefaultUI: boolean = false;
	zoomControl: boolean = true;
	show_visited: string = 'all';
	arenas = [
		new Arena( 'Anaheim Ducks', 'assets/img/logos/anaheim-ducks.svg', 'assets/img/icons/anaheim-ducks.png', false, 33.8078363, -117.8786819 ),
		new Arena( 'Arizona Coyotes', 'assets/img/logos/arizona-coyotes.svg', 'assets/img/icons/arizona-coyotes.png', true, 33.532237, -112.263445 ),
		new Arena( 'Boston Bruins', 'assets/img/logos/boston-bruins.svg', 'assets/img/icons/boston-bruins.png', false, 42.3661881, -71.0643422 ),
		new Arena( 'Buffalo Sabres', 'assets/img/logos/buffalo-sabres.svg', 'assets/img/icons/buffalo-sabres.png', false, 42.8749968, -78.8761674 ),
		new Arena( 'Calgary Flames', 'assets/img/logos/calgary-flames.svg', 'assets/img/icons/calgary-flames.png', false, 51.0373732, -114.054265 ),
		new Arena( 'Carolina Hurricanes', 'assets/img/logos/carolina-hurricanes.svg', 'assets/img/icons/carolina-hurricanes.png', false, 35.8033394,-78.7217946 ),
		new Arena( 'Chicago Blackhawks', 'assets/img/logos/chicago-blackhawks.svg', 'assets/img/icons/chicago-blackhawks.png', true, 41.8806991,-87.6762708 ),
		new Arena( 'Colorado Avalanche', 'assets/img/logos/colorado-avalanche.svg', 'assets/img/icons/colorado-avalanche.png', true, 39.7486565,-105.0097968 ),
		new Arena( 'Columbus Blue Jackets', 'assets/img/logos/columbus-blue-jackets.svg', 'assets/img/icons/columbus-blue-jackets.png', false, 39.9694406,-83.0086341 ),
		new Arena( 'Dallas Stars', 'assets/img/logos/dallas-stars.svg', 'assets/img/icons/dallas-stars.png', false, 33.0188211,-96.8412506 ),
		new Arena( 'Detroit Red Wings', 'assets/img/logos/detroit-red-wings.svg', 'assets/img/icons/detroit-red-wings.png', true, 42.3251899,-83.1213998 ),
		new Arena( 'Edmonton Oilers', 'assets/img/logos/edmonton-oilers.svg', 'assets/img/icons/edmonton-oilers.png', false, 53.5469485,-113.4982859 ),
		new Arena( 'Florida Panthers', 'assets/img/logos/florida-panthers.svg', 'assets/img/icons/florida-panthers.png', false, 26.1584427,-80.3278089 ),
		new Arena( 'Los Angeles Kings', 'assets/img/logos/los-angeles-kings.svg', 'assets/img/icons/los-angeles-kings.png', true, 34.0430175,-118.2694481 ),
		new Arena( 'Minnesota Wild', 'assets/img/logos/minnesota-wild.svg', 'assets/img/icons/minnesota-wild.png', false, 44.944906,-93.103343 ),
		new Arena( 'Montreal Canadiens', 'assets/img/logos/montreal-canadiens.svg', 'assets/img/icons/montreal-canadiens.png', false, 45.4955108,-73.5695708 ),
		new Arena( 'Nashville Predators', 'assets/img/logos/nashville-predators.svg', 'assets/img/icons/nashville-predators.png', false, 36.1595351,-86.7810777 ),
		new Arena( 'New Jersey Devils', 'assets/img/logos/new-jersey-devils.svg', 'assets/img/icons/new-jersey-devils.png', false, 40.7336167,-74.17115 ),
		new Arena( 'New York Islanders', 'assets/img/logos/new-york-islanders.svg', 'assets/img/icons/new-york-islanders.png', false, 40.6824952,-73.9772236 ),
		new Arena( 'New York Rangers', 'assets/img/logos/new-york-rangers.svg', 'assets/img/icons/new-york-rangers.png', false, 40.7505045,-73.9956327 ),
		new Arena( 'Ottowa Senators', 'assets/img/logos/ottowa-senators.svg', 'assets/img/icons/ottowa-senators.png', false, 45.3348021,-75.9184263 ),
		new Arena( 'Philidelphia Flyers', 'assets/img/logos/philidelphia-flyers.svg', 'assets/img/icons/philidelphia-flyers.png', false, 39.9011809,-75.1742469 ),
		new Arena( 'Pittsburgh Penguins', 'assets/img/logos/pittsburgh-penguins.svg', 'assets/img/icons/pittsburgh-penguins.png', true, 40.4395148,-79.9915569 ),
		new Arena( 'San Jose Sharks', 'assets/img/logos/san-jose-sharks.svg', 'assets/img/icons/san-jose-sharks.png', true, 37.3260746,-121.900262 ),
		new Arena( 'St Louis Blues', 'assets/img/logos/st-louis-blues.svg', 'assets/img/icons/st-louis-blues.png', true, 38.6265853,-90.2051319 ),
		new Arena( 'Tampa Bay Lightning', 'assets/img/logos/tampa-bay-lightning.svg', 'assets/img/icons/tampa-bay-lightning.png', true, 27.9835375,-82.4843154 ),
		new Arena( 'Toronto Maple Leafs', 'assets/img/logos/toronto-maple-leafs.svg', 'assets/img/icons/toronto-maple-leafs.png', false, 43.6434661,-79.3790989 ),
		new Arena( 'Vancouver Canucks', 'assets/img/logos/vancouver-canucks.svg', 'assets/img/icons/vancouver-canucks.png', false, 49.2778449,-123.1109512 ),
		new Arena( 'Vegas Golden Knights', 'assets/img/logos/vegas-golden-knights.svg', 'assets/img/icons/vegas-golden-knights.png', true, 36.1028767,-115.1784324 ),
		new Arena( 'Washington Capitals', 'assets/img/logos/washington-capitals.svg', 'assets/img/icons/washington-capitals.png', false, 38.8884197,-77.1006833 ),
		new Arena( 'Winnipeg Jets', 'assets/img/logos/winnipeg-jets.svg', 'assets/img/icons/winnipeg-jets.png', false, 49.8926174,-97.1437393 ),
	]
}
