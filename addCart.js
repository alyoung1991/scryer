addCart();

function addCart() {
  var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      loadScript();
    }
  } else {
    loadScript();
  }
  function loadScript() {
    var script = document.createElement('script');
    script.async = true;
    script.src = scriptURL;
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
    script.onload = ShopifyBuyInit;
  }
  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: 'scryer-rum.myshopify.com',
      storefrontAccessToken: '08c65e55bb5755717324a9ccf03c0fa9',
    });
    ShopifyBuy.UI.onReady(client).then(function (ui) {
	  ui.createCart({
        id: '5563396128928',
        node: document.getElementById('collection-component-1602094249231'),
        moneyFormat: '%24%7B%7Bamount%7D%7D',
        options: {
		  "product": {
		    "styles": {
		      "product": {
		        "@media (min-width: 601px)": {
		          "max-width": "100%",
		          "margin-left": "0",
		          "margin-bottom": "50px"
		        },
		        "text-align": "left"
		      },
		      "title": {
		        "font-size": "26px",
		        "color": "#ffffff"
		      },
		      "button": {
		        "font-family": "Roboto, sans-serif",
		        "font-weight": "bold",
		        "font-size": "16px",
		        "padding-top": "16px",
		        "padding-bottom": "16px",
		        "border-radius": "13px",
		        "padding-left": "48px",
		        "padding-right": "48px"
		      },
		      "quantityInput": {
		        "font-size": "16px",
		        "padding-top": "16px",
		        "padding-bottom": "16px"
		      },
		      "price": {
		        "font-size": "18px",
		        "color": "#ffffff"
		      },
		      "compareAt": {
		        "font-size": "15.299999999999999px",
		        "color": "#ffffff"
		      },
		      "unitPrice": {
		        "font-size": "15.299999999999999px",
		        "color": "#ffffff"
		      },
		      "description": {
		        "color": "#ffffff"
		      }
		    },
		    "layout": "horizontal",
		    "contents": {
		      "img": false,
		      "imgWithCarousel": true,
		      "description": true
		    },
		    "width": "100%",
		    "text": {
		      "button": "Add to cart"
		    },
		    "googleFonts": [
		      "Roboto"
		    ]
		  },
		  "productSet": {
		    "styles": {
		      "products": {
		        "@media (min-width: 601px)": {
		          "margin-left": "-20px"
		        }
		      }
		    }
		  },
		  "modalProduct": {
		    "contents": {
		      "img": false,
		      "imgWithCarousel": true
		    },
		    "styles": {
		      "product": {
		        "@media (min-width: 601px)": {
		          "max-width": "100%",
		          "margin-left": "0px",
		          "margin-bottom": "0px"
		        }
		      },
		      "button": {
		        "font-family": "Roboto, sans-serif",
		        "font-weight": "bold",
		        "font-size": "16px",
		        "padding-top": "16px",
		        "padding-bottom": "16px",
		        "border-radius": "13px",
		        "padding-left": "48px",
		        "padding-right": "48px"
		      },
		      "quantityInput": {
		        "font-size": "16px",
		        "padding-top": "16px",
		        "padding-bottom": "16px"
		      }
		    },
		    "googleFonts": [
		      "Roboto"
		    ],
		    "text": {
		      "button": "Add to cart"
		    }
		  },
		  "cart": {
		    "styles": {
		      "button": {
		        "font-family": "Roboto, sans-serif",
		        "font-weight": "bold",
		        "font-size": "16px",
		        "padding-top": "16px",
		        "padding-bottom": "16px",
		        ":hover": {
		          "background-color": "#22367a"
		        },
		        "background-color": "#142048",
		        ":focus": {
		          "background-color": "#22367a"
		        },
		        "border-radius": "13px"
		      }
		    },
		    "text": {
		      "total": "Subtotal",
		      "notice": "",
		      "button": "Checkout"
		    },
		    "contents": {
		      "note": true
		    },
		    "googleFonts": [
		      "Roboto"
		    ]
		  },
		  "toggle": {
		    "styles": {
		      "toggle": {
		        "font-family": "Roboto, sans-serif",
		        "font-weight": "bold"
		      },
		      "count": {
		        "font-size": "16px"
		      }
		    },
		    "googleFonts": [
		      "Roboto"
		    ]
		  }
		},
      })
	});
  }
}