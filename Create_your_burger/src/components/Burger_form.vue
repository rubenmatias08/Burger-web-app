<template>
    <div>
    <!-- Info Message -->
     <message :msg="msg" v-show="msg"/>
      <div>
        <form id="burgerform" @submit="createBurger">
            <!-- Client ID -->
            <div class="input_container">
                <label for="Name">Client Name:</label>
                <input type="text" name="name" id="name" v-model="Name" placeholder="Enter your name">
            </div>
             <!-- Ingredient Selection -->
            <div class="input_container">
                <label for="Bread">Choose your bread:</label>
                <select name="bread" id="bread" v-model="bread">
                <option value="">SELECT YOUR BREAD:</option>
                <option v-for="bread in breads" :key="bread.id" :value="bread.type">
                {{ bread.type }}</option>
                </select>
            </div>
            <div class="input_container">
                <label for="Meat">Choose your meat:</label>
                <select name="meat" id="meat" v-model="meat">
                <option value="">SELECT YOU MEAT:</option>
                <option v-for="meat in meats" :key="meat.id" :value="meat.type">
                {{ meat.type }}</option>
                </select>
            </div>
            <div id="extras_container" class="input_container">
                <label id="extras-title" for="extras">SELECT YOUR EXTRAS:</label>
            <div class="checkbox_container" v-for = "extra in extrasdata" :key="extra.id">
                <input type="checkbox" name="extras" v-model="extras" :value="extra.type">
                <span>{{ extra.type }}</span>

            </div>
            </div>
            <!-- Submit Order -->
            <div class="input_container">
                <input type="submit" class="submit-btn" value="Create">

            </div>
        </form>
      </div>
    </div>
</template>

<script>
import message from './Message.vue';

export default{
    name:'Burger_form',

    components:{message},

    data(){
        return{
            breads:null,
            meats:null,
            extrasdata: null,
            Name:null,
            bread:null,
            meat:null,
            extras:[],
            msg: null
            }
        },
        methods:{
            async getIngredients(){
                const req = await fetch('http://localhost:3000/ingredients');
                const data = await req.json();
                this.breads= data.breads
                this.meats = data.meats
                this.extrasdata = data.extras;
                },

                async createBurger(e){
                    e.preventDefault();

                    const data = {
                        Name : this.Name,
                        meat : this.meat,
                        bread: this.bread,
                        extras: Array.from(this.extras),
                        status: "Ordered",
                    }
                  

                    const dataJSON = JSON.stringify(data)

                    const req = await fetch("http://localhost:3000/burgers",{
                        method:"POST",
                        headers:{"Content-Type":"application/json"},
                        body: dataJSON});
                        const result = await req.json()
                        this.msg = `Order nº ${result.id} sucessful added`
                        setTimeout(() => this.msg ="",3000);

                        this.Name = "";
                        this.meat = "";
                        this.bread = "";
                        this.extras = "";
                }
                },
                mounted(){this.getIngredients()}
}
</script>

<style scoped>
#burgerform{
    max-width: 400px;
    margin: 0 auto ;
}

.input_container{
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
}

label {
    font-weight: 20px;
    margin-bottom: 15px;
    color: #222;
    padding: 5px 10px;
    border-left: 4px solid #fcab03 ;
}

input, select{
    padding: 5px 10px;
    width: 300px;
}

#extras_container{
    flex-direction: row;
    flex-wrap: wrap;
}

#extras-title{
    width: 100%;
}

.checkbox_container{
    display: flex;
    align-items: flex-start;
    width: 50%;
    margin-bottom: 20px;
}

.checkbox_container span,
.checkbox_container input{
    width: auto;
}

.checkbox_container span {
    margin-left: 6px;
    font-weight: bold;
  }
  .submit-btn {
    background-color: #222;
    color:#fcba03;
    font-weight: bold;
    border: 2px solid #222;
    padding: 10px;
    font-size: 16px;
    margin: 0 0;
    cursor: pointer;
    transition: .5s;

  }
  .submit-btn:hover {
    background-color: transparent;
    color: #222;
  }
</style>