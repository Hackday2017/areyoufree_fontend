<template>
    <div id='main' >

      <!-- <div class="first"> -->
      <md-toolbar class="md-primary">
      <span class="md-title">有空吗</span>
    </md-toolbar>
    <!-- </div> -->

<div class='creat-choice' v-if="choice">

 <md-tabs md-sync-route>
      <md-tab id="name" md-label="name" to="/components/tabs/name" @click="name = true">

              <md-dialog-prompt
      :md-active.sync="name"
      v-model="namevalue"
      md-title="What's your name?"
      md-input-maxlength="30"
      md-input-placeholder="Type your name..."
      md-confirm-text="Done" />

      </md-tab>

      <md-tab id="tab-group" md-label="group" to="/components/tabs/group" @click="group=true">

         <md-dialog-prompt
      :md-active.sync="group"
      v-model="groupvalue"
      md-title="What's your group-name?"
      md-input-maxlength="30"
      md-input-placeholder="Type your group-name..."
      md-confirm-text="Done" />

      </md-tab>

      <md-tab id="tab-time" md-label
      ="time" to="/components/tabs/time" @click="time= true">

     <div>
    <md-datepicker v-model="selectedate" :md-active.sync="time" />
  </div>

    </md-tab> 

      <!-- <md-tab id="tab-favorites" md-label="Favorites" to="/components/tabs/favorites">
        Favorites tab
        <p>Maiores, dolorum. Beatae, optio tempore fuga odit aperiam velit, consequuntur magni inventore sapiente alias sequi odio qui harum dolorem sunt quasi corporis.</p>
      </md-tab> -->
    </md-tabs>
     <md-card class="md-primary" v-if="namevalue">
      <md-card-header>
        <md-card-header-text>
             <div class="md-content" v-if="groupvalue">组名  : {{ groupvalue }}</div>
          <div  class="md-content"v-if="namevalue">名字   :    {{ namevalue }}</div>
        </md-card-header-text>
      </md-card-header>
     </md-card>
      <md-button class="md-dense md-raised md-primary center"  v-if="groupvalue&&namevalue&&selectedate" @click="login">提交信息</md-button>
</div>
      <article  class="state" v-if="state">

      <div>

    <md-empty-state
      md-icon=""
      md-label="Log-in "
      md-description=" Now begin to make a time table for your team.">
      <md-button class="md-primary md-raised" @click="creatchoice">创建任务</md-button>
      <md-button class="md-primary md-raised">查询任务</md-button>
    </md-empty-state>

  </div>

    
        <!-- / College Timetable -->
        <div v-if='table' class='tab'>
          <table border='0' cellpadding='0' cellspacing='0'>
            <tr class='days'>
              <th></th>
              <th>Seg</th>
              <th>Ter</th>
              <th>Qua</th>
              <th>Qui</th>
              <th>Sex</th>
            </tr>
            <tr>
              <td class='time'>9.00</td>
              <td id='c1'class='cs335 blue' data-tooltip='Engenharia de Software &amp; Processamento de Dados'>CS335 [JH1]</td>
              <td id='c2'class='cs426 purple' data-tooltip='Computer Graphics'>CS426 [CS1]</td>
              <td id='c3'></td>
              <td id='c4'></td>
              <td id='c5'>-</td>
            </tr>
            <tr>
              <td class='time'>9:15 - 10.00</td>
              <td id='c6'></td>
              <td id='c7' class='cs335 blue lab' data-tooltip='Software Engineering &amp; Software Process'>CS335 [Lab]</td>
              <td id='c8' class='md352 green' data-tooltip='Multimedia Production &amp; Management'>MD352 [Kairos]</td>
              <td id='c9'></td>
              <td id='c10'>-</td>
            </tr>
            <tr>
              <td class='time'>11.00</td>
              <td id='c11'></td>
              <td id='c12' class='cs335 blue lab' data-tooltip='Software Engineering &amp; Software Process'>CS335 [Lab]</td>
              <td id='c13' class='md352 green' data-tooltip='Multimedia Production &amp; Management'>MD352 [Kairos]</td>
              <td id='c14' class='cs240 orange' data-tooltip='Operating Systems'>CS240 [CH]</td>
              <td id='c15'>-</td>
            </tr>
            <tr>
              <td class='time'>12.00</td>
              <td id='c16'></td>
              <td id='c17' class='md303 navy' data-tooltip='Media &amp; Globalisation'>MD303 [CS2]</td>
              <td id='c18' class='md313 red' data-tooltip='Special Topic: Multiculturalism &amp; Nationalism'>MD313 [Iontas]</td>
              <td id='c19' ></td>
              <td id='c20' >-</td>
            </tr>
            <tr>
              <td class='time'>13.00</td>
              <td id='c21'></td>
              <td id='c22'></td>
              <td id='c23'></td>
              <td id='c24'></td>
              <td id='c25'>-</td>
            </tr>
            <tr>
              <td class='time'>14.00</td>
              <td id='c26'></td>
              <td id='c27'></td>
              <td id='c28' class='cs426 purple' data-tooltip='Computer Graphics'>CS426 [CS2]</td>
              <td id='c29' class='cs240 orange' data-tooltip='Operating Systems'>CS240 [TH1]</td>
              <td id='c30'>-</td>
            </tr>
            <!-- <tr>
              <td class='time'>15.00</td>
              <td></td>
              <td></td>
              <td></td>
              <td class='cs240 orange lab' data-tooltip='Operating Systems'>CS240 [Lab]</td>
              <td>-</td>
            </tr>
            <tr>
              <td class='time'>16.00</td>
              <td></td>
              <td></td>
              <td></td>
              <td class='cs240 orange lab' data-tooltip='Operating Systems'>CS240 [Lab]</td>
              <td>-</td>
            </tr>
            <tr>
              <td class='time'>17.00</td>
              <td class='cs335 blue' data-tooltip='Software Engineering &amp; Software Process'>CS335 [TH1]</td>
              <td></td>
              <td></td>
              <td></td>
              <td>-</td>
            </tr> -->
          </table>
        </div>
  
      </article>
      <!-- <nav>
        <ul id="sortable">
            <li class="list-header">
              <h4>#1 Período</h4>
            </li>
            <li class="list-item" >
              <input id='label-1' type='checkbox' checked/>
              <label position="c1 c2" d-rec="CC003"for='label-1'>
                <h2>ENG SOFTWARE </h2>
                  <span>Turma CS335</span></h2>
              </label>
            </li>
            <li class="list-item" >
              <input id='label-2' type='checkbox' checked/>
              <label position="c2" d-rec="CC123" for='label-2'>
                <h2 data-tooltip='Engenharia de Software' >ENG SOFTWARE </h2>
                  <span>Turma CS335</span></h2>
              </label>
            </li>
            <li class="list-item" >
              <input id='label-3' type='checkbox' checked/>
              <label position="c1 c3 c26 c29" d-rec="MAT254" for='label-3'>
                <h4>Calculo Diferencial & Integral</h4>
                <span><b>Turma:</b> Noite</span></h2>
              </label>
            </li>
            <li class="list-item" >
              <input id='label-5' type='checkbox' checked/>
              <label position="c26" d-rec="MAT254" for='label-5'>
                <h4>Calculo Diferencial & Integral</h4>
                <span><b>Turma:</b> Noite</span></h2>
              </label>
            </li> -->
  <!--
            <li>
              <input id='label-3' type='checkbox'/>
              <label for='label-3'>
                <h2>Watch Movie <span>Lorem ipsum dolor</span></h2>
              </label>
            </li>
  
            <li>
            <input id='label-4' type='checkbox'/>
             <label for='label-4'>
                <h2>Date with babe <span>Lorem ipsum dolor</span></h2>
              </label>
            </li>
  
          <li>
           <input id='label-5' type='checkbox'/>
           <label for='label-5'>
              <h2>Jogging at Ayala<span>Lorem ipsum dolor</span></h2>
            </label>
          </li> -->
  
      <!-- </ul>
      </nav> -->
      <!-- <aside>aside</aside> -->
    </div>
   
  </div>
</template>

<script>

export default {
  name: 'DialogPrompt',
  name: 'Sidenav',
  data() {
    return {
      namevalue:null,
      groupvalue:null,
      selectdate:null,
     state:true,
     first:true,
     creat:true,
     name:true,
     time:false,
    group:false,
    // active: false,
    table:false,
    };
  },
  components: {},
  computed:{
   
    
  },
  methods: {
    login:function(){
    //fetch
    this.choice=false;
    this.table=true;
    },
    creatchoice:function(){
      this.choice=true;
      this.state=false;
      console.log('choice')
    }

  }
};
</script>

<style lang="scss">
/*unrelated styling*/
@import "~vue-material/dist/theme/engine"; // Import the theme engine
@include md-register-theme("default", (
  primary: md-get-palette-color(blue, A200) // The primary color of your application
));

@import "~vue-material/dist/theme/all"; // Apply the theme
//  @import url(https://fonts.googleapis.com/css?family=Open+Sans:300,400);
.center{
  position: absolute;
  left: 50%;
  top: 15vh;
  transform: translateX(-70%);
}
.state{
  margin-top: 20%!important;
}
.page-container {
    min-height: 300px;
    overflow: hidden;
    position: relative;
    border: 1px solid rgba(#000, .12);
  }

   // Demo purposes only
  .md-drawer {
    width: 230px;
    max-width: calc(100vw - 125px);
  }

  .md-content {
    padding: 16px;
  }
body{
  background: #fafafa;
  font-family: sans-serif;
  padding: 10px;
}


*, *:before, *:after {
  margin: 0;
  padding: 0;
  border: 0;
  outline: 0;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

#overlay {
      background-color: rgba(46,204,113,0.94);
      z-index: 1006;
      position: absolute;
      right: 40px;
      top: 10px;
      width: 200px;
      height: inherit;
      display: none;
      margin: 0 auto;
      padding: 10px;
      color: #efefef;
      text-align: center;
      font-weight: 600;
      font-family: 'Open Sans', Helvetica;
}

.corVermelha{ background: #da2424 !important;}
.corVerde{    background: #bdff3b !important;}

.blue { background: #3498db; }

.purple { background: #9b59b6; }

.navy { background: #34495e; }

.green { background: #2ecc71; }

.red { background: #e74c3c; }

.orange { background: #f39c12; }

.cs335, .cs426, .md303, .md352, .md313, .cs240 {
  font-weight: 300;
  cursor: pointer;
}

table {
  font-family: 'Open Sans', Helvetica;
  color: #100f0f;
}
table tr:nth-child(2n) {
  background: #eff0f1;
}
table tr:nth-child(2n+3) {
  background: #fff;
}
table th, table td {
  padding: 1em;
  width: 10em;
}

.days, .time {
  background: #34495e;
  text-transform: uppercase;
  font-size: 0.6em;
  text-align: center;
}

.time {
  width: 3em !important;
}

/* Add this attribute to the element that needs a tooltip */
[data-tooltip] {
  position: relative;
  z-index: 2;
  cursor: pointer;
}

/* Hide the tooltip content by default */
[data-tooltip]:before,
[data-tooltip]:after {
  visibility: hidden;
  filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=0);
  opacity: 0;
  pointer-events: none;
  -moz-transition: ease 0.5s all;
  -o-transition: ease 0.5s all;
  -webkit-transition: ease 0.5s all;
  transition: ease 0.5s all;
}

/* Position tooltip above the element */
[data-tooltip]:before {
  position: absolute;
  bottom: 110%;
  left: 50%;
  margin-bottom: 5px;
  margin-left: -80px;
  padding: 7px;
  width: 160px;
  -moz-border-radius: 6px;
  -webkit-border-radius: 6px;
  border-radius: 6px;
  background-color: black;
  color: #fff;
  content: attr(data-tooltip);
  text-align: center;
  font-size: 14px;
  line-height: 1.2;
}

/* Triangle hack to make tooltip look like a speech bubble */
[data-tooltip]:after {
  position: absolute;
  bottom: 110%;
  left: 50%;
  margin-left: -5px;
  width: 0;
  border-top: 5px solid black;
  border-right: 5px solid transparent;
  border-left: 5px solid transparent;
  content: " ";
  font-size: 0;
  line-height: 0;
}

/* Show tooltip content on hover */
[data-tooltip]:hover:before,
[data-tooltip]:hover:after {
  visibility: visible;
  bottom: 90%;
  filter: progid:DXImageTransform.Microsoft.Alpha(enabled=false);
  opacity: 1;
}

#main {
    min-height: 800px;
    margin: 0px;
    padding: 0px;
    display: flex;
    flex-flow: row;
}

#main > article {
    margin: 4px;
    padding: 5px;
    /*border: 1px solid #cccc33;*/
    /*border-radius: 7pt;*/
    /*background: #dddd88;*/
    flex: 3 1 60%;
    order: 2;
}

#main > nav {
    margin: 4px;
    padding: 5px;
    /*border: 1px solid #8888bb;
    border-radius: 7pt;
    background: #ccccff;*/
    flex: 1 6 20%;
    order: 1;
}

#main > aside {
    margin: 4px;
    padding: 5px;
    border: 1px solid #8888bb;
    border-radius: 7pt;
    background: #ccccff;
    flex: 1 6 20%;
    order: 3;
}

header, footer {
    display: block;
    margin: 4px;
    padding: 4em;
    min-height: 100px;
    /*border: 1px solid #eebb55;*/
    /*border-radius: 7pt;*/

    background-color: #17BEBB;
    border-bottom: 0.5em solid #2E282A;
    color: #2E282A;
    text-align: center;
    /*margin-bottom: 2em;*/
    /*padding: 4.5em 2em;*/
}
.hero {
  background-color: #17BEBB;
  border-bottom: 0.5em solid #2E282A;
  color: #2E282A;
  text-align: center;
  /*margin-bottom: 2em;*/
  padding: 4.5em 2em;
}

.hero p {
  margin-bottom: 0;
}
h1 {
  font-family: 'Roboto Slab';
  font-size: 100%;
  margin: 0 0 0.25em;
}

/*List*/

h1{
  color: #fff;
  text-align: center;
  font-size: 40px;
  font-weight: 100;
}

ul{
  list-style: none;
  margin: 0;
  padding: 0;
}

/*.steps{
  width: 300px;
  height: 405px;
  position: absolute;
  top: 15%;
  left: 0px;
  right: 0px;
  margin: 0px auto;
}*/

input[type=checkbox] {
  /*ocultar checkbox*/
  display: none;
}

/*.ui-sortable-placeholder{
  border: 1px dotted #fff;
  padding: 30px 20px;
  position: relative;
}

.ui-sortable-placeholder:after{
  content: "Place me here. Pretty Please  :3";
  position: absolute;
  top: 30%;
  left: 0;
  right: 0;
  margin: auto;
  color: #fff;
  text-align: center;
}*/


label{
  background: #34495E;
  height: 69px;
  width: 100%;
  display: block;
  border-bottom: 1px solid #2C3E50;
  color: #fff;
  text-transform: capitalize;
  font-weight: 900;
  font-size: 11px;
  letter-spacing: 1px;
  cursor: pointer;
  transition: all 0.7s ease;
  position: relative;
  padding: 5px 5px 5px 70px;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
}


label h2 span{
  display: block;
  font-size: 5px;
  text-transform: capitalize;
  font-weight: normal;
  color: #bdc3c7;
}

label:before{
  content:"";
  width: 19px;
  height: 19px;
  border: 1px solid #416282;
  display: block;
  position: absolute;
  border-radius: 100%;
  left: 20px;
  top: 30%;
  transition: border 0.7s ease;
  z-index: 9999;
}
/*
label:after{
  content: "";
  width: 60px;
  height: 68px;
  background: #2C3E50;
  position: absolute;
  left: 0;
  top: 0;
}*/


#label-1:checked ~ label[for=label-1],
#label-2:checked ~ label[for=label-2],
#label-3:checked ~ label[for=label-3],
#label-4:checked ~ label[for=label-4],
#label-5:checked ~ label[for=label-5]{
  background: #2C3E50;
  border-bottom: 1px solid #34495E;
  color: #1ABC9C;
}

#label-1:checked ~ label[for=label-1] h2 span,
#label-2:checked ~ label[for=label-2] h2 span,
#label-3:checked ~ label[for=label-3] h2 span,
#label-4:checked ~ label[for=label-4] h2 span,
#label-5:checked ~ label[for=label-5] h2 span{
  color: #1ABC9C;
}



#label-1:checked ~ label[for=label-1]:before,
#label-2:checked ~ label[for=label-2]:before,
#label-3:checked ~ label[for=label-3]:before,
#label-4:checked ~ label[for=label-4]:before,
#label-5:checked ~ label[for=label-5]:before{
  /*background: url("https://designmodo.github.io/Flat-UI/images/todo/done.png") no-repeat center center;*/
  background-color: #f90;
  border: 1px solid #1abc9d;
}

li:first-child label{
  height: 50px;
  text-transform: uppercase;
  /*font-size: 12px;*/
  border-right: 8px solid #f87c85;
  padding-top: 5%;
  padding-bottom: 5%;
}


li:first-child label:before{
  top: 40%;
}

li:first-child label:after{
  height: 149px;
}

li:nth-child(2) label{
  border-right: 8px solid #feb47f;
}

li:nth-child(3) label{
  border-right: 8px solid #3498db;
}

li:nth-child(4) label{
  border-right: 8px solid #b985ea;
}

li:last-child label{
  border-right: 8px solid #43d6b0;
}


.list-header{
  background: #8BC34A;
  padding: 5%;
  font-size: 14px;
}

/* Too narrow to support three columns */
@media screen and (max-width: 680px){
    #main, #page {
        flex-direction: column;
    }

    #main > article, #main > nav, #main > aside {
    /* Return them to document order */
        order: 0;
    }

    #main > nav, #main > aside, header {
        min-height: 50px;
        max-height: 50px;
    }
}

</style>
