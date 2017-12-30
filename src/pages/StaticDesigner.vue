<template>
    <v-container>

            <v-text-field
              v-model="productName"
              label="product name"
              hint="product name"
            ></v-text-field>
      
            <v-text-field
              v-model="productPrice"
              label="product price"
              hint="product price"
            ></v-text-field>
            <v-btn @click.native="SaveProduct" light>save product</v-btn>
 
    </v-container>
</template>

<script>

    export default {
        data () {
            return {
                productName : '',
                productPrice : ''
            }

        },

        methods: {
            SaveProduct: function () {
                alert("productName: " + this.productName + "\nproductPrice: " + this.productPrice)
                //console.log("test 1 2 3")
                
            }
        }
    }
</script>

