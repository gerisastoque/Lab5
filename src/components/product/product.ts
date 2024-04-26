import productStyles from './product.css';

class Product extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}
}
