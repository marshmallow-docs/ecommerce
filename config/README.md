---
sidebar: auto
---

# Config

[[toc]]

## Cart

### Models
The cart config has an array where all models are defined which are used by the shopping cart. This can be overruled in you application if you wish to do so. This is available so you can create your own class, extend the original and then provide your own class in the config. See the example below.
```php
// YOUR CUSTOM MODEL
class MyCystomProduct extends \Marshmallow\Product\Models\Product
{
	// ...
}

// YOUR CONFIG/CART.PHP FILE
return [
	'models' => [
		'product' => \App\Models\MyCystomProduct::class,
		'prospect' => \Marshmallow\Ecommerce\Cart\Models\Prospect::class,
		'customer' => \Marshmallow\Ecommerce\Cart\Models\Customer::class,
	]
];
```


- Type: `string`
- Default: `/`

## Priceable

### Nova settings
The priceable config has a key with dedicated nova settings. This is implemented like the code below.
```php
'nova' => [
	'prices_are_including_vat' => true,
	'defaults' => [
		//
	],
	'resources' => [
		//
	]
],
```

#### Prices are including vat
Are the prices entered in Nova including including VAT or Excluding? If they are excluding VAT, you should change this to false.
- Key: `nova.prices_are_including_vat`
- Type: `boolean`
- Default: true
- Options: `true` `false`

### On multiple prices
When we find more then one price on a model when calling he $product->price() method, how should we deside which price to use.
- Key: `on_multiple_prices`
- Type: `string`
- Default: `lowest`
- Options: `highest` `lowest` `eldest` `newest`

### Public excluding VAT
Should the public prices be including or excluding VAT? If you want them to be exclusing, you need to set the env variable `PRICEABLE_PUBLIC_EXCLUDING_VAT` to true or update your `config/priceable.php` file.
- Key: `public_excluding_vat`
- Type: `boolean`
- Default: `env('PRICEABLE_PUBLIC_EXCLUDING_VAT', false)`
- Options: `true` `false`

<EditOnGithub repo_name="ecommerce" edit_url="config/README.md"/>
