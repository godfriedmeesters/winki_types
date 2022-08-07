class Product
{
    shop;   // name of the shop
    localProductId;  //local product id
    eanCodes;  //eanCodes
    name;   //name of the product
    price; //price
    unit; // unit (gram, kilo, ...)
    contents;   // contents, e.g. 500 gram
    description; //description
    categories; //array of categories
    brand; //brand
    image; //url to image
    nutriscore;
    url;
    timeRetrieved = new Date();
    discountDescription;
    isDiscounted;
    priceBeforeDiscount;

    constructor(shop, localProductId, eanCodes, name, price, unit, contents, description, categories, brand, image, url, nutriscore = '', discountDescription = '',
                isDiscounted = false, priceBeforeDiscount) {
        this.shop = shop;
        this.localProductId = localProductId;
        this.eanCodes = eanCodes;
        this.name = name;
        this.price = price;
        this.unit = unit;
        this.contents = contents;
        this.description = description;
        this.categories = categories;
        this.brand = brand;
        this.image = image;
        this.nutriscore = nutriscore;
        this.url = url;
        this.discountDescription = discountDescription;
        this.isDiscounted = isDiscounted;
        this.priceBeforeDiscount = priceBeforeDiscount;
      }
}

module.exports =  {Product}
