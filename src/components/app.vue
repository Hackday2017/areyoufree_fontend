<template>
    <div id='main' >

      <div class="first"> 
      <md-toolbar class="md-primary">
      <span class="md-title">有空吗</span>
    </md-toolbar>
     </div> 

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
    <md-datepicker v-model="selectdate" :md-active.sync="time" />
  </div>

    </md-tab> 

    </md-tabs>




<div >
     <md-card class="md-primary card" v-if="namevalue">
      <md-card-header>
        <md-card-header-text>
             <div class="md-content" v-if="groupvalue">组名  : {{ groupvalue }}</div>
          <div  class="md-content"v-if="namevalue">名字   :    {{ namevalue }}</div>
        </md-card-header-text>
      </md-card-header>
     </md-card>
      <md-button class="md-dense md-raised md-primary center"  v-if="groupvalue&&namevalue&&selectdate" @click="login">提交信息</md-button>
</div>

</div>


      <article  class="state" v-if="state">
      <div>
    <md-empty-state
      md-icon=""
      md-label="Log-in "
      md-description=" Now begin to make a time table for your team.">
      <md-button class="md-primary md-raised" @click="creatchoice">创建任务</md-button>
      <md-button class="md-primary md-raised " @click="search">查询任务</md-button>
    </md-empty-state>
  </div>
</article>


        <!-- / College Timetable -->
        <div  v-if='table' class='tab' >
          <table border='0' cellpadding='0' cellspacing='0' >
            <tr class='days'>
              <th></th>
              <th>Monday</th>
              <th>Tuesday</th>
              <th>Wednesday</th>
              <th>Thursday</th>
              <th>Friday</th>
              <th>Saturday</th>
              <th>Sunday</th>
            </tr>
            
    <td>
            <tr class="outtr" >
              <tr  v-for="(timelimit,index ) in timelimit" :key="index" >
                <td>{{timelimit}}</td>
              </tr>
            </tr>
     </td>

  <td>
            <tr class="outtr" >
              <tr v-for="(value,index) in grouptime[0]"  :key="index" @click="add(0,index)" 
              >
                <td :data-tooltip='people[0]'>{{value}}人</td>
              </tr>
            </tr>
  </td>
         
    <td>
            <tr class="outtr" >
              <tr v-for="(value,index) in grouptime[1]" @click="add(1,index)"  :key="index">
                <td :data-tooltip='people[1]'>{{value}}</td>
              </tr>
            </tr>
         </td>
         
         <td>
            <tr class="outtr" >
              <tr v-for="(value,index) in grouptime[2]"  @click="add(2,index)"  :key="index">
                <td :data-tooltip='people[2]'>{{value}}</td>
              </tr>
            </tr>
         </td>
         
         <td>
            <tr class="outtr" >
              <tr v-for="(value,index) in grouptime[3]" @click="add(3,index)"  :key="index">
                <td :data-tooltip='people[3]'>{{value}}</td>
              </tr>
            </tr>
         </td>
         
         <td>
            <tr class="outtr" >
              <tr v-for="(value,index) in grouptime[4]" @click="add(4,index)" :key="index">
                <td :data-tooltip='people[4]'>{{value}}</td>
              </tr>
            </tr>
         </td>
         
         <td>
            <tr class="outtr" >
              <tr v-for="(value,index) in grouptime[5]" @click="add(5,index)"  :key="index">
                <td :data-tooltip='people[5]'>{{value}}</td>
              </tr>
            </tr>
         </td>
         
         <td>
            <tr class="outtr" >
              <tr v-for="(value,index) in grouptime[6]" @click="add(6,index)" :key="index">
                <td :data-tooltip='people[6]'>{{value}}</td>
              </tr>
            </tr>
         </td>
          </table>
        </div>
 
    
        <md-button class="md-dense md-raised md-primary center" v-if='postbtn' @click="post">post</md-button>
    </div>
   
  </div>
  
</template>

<script>
export default {
  name: "DialogPrompt",
  name: "Sidenav",
  data() {
    return {
      postbtn: false,
      namevalue: null,
      groupvalue: null,
      selectdate: null,
      state: true,
      first: true,
      creat: true,
      name: true,
      time: false,
      group: false,
      // active: false,
      table: false,
      choice: false,
      datatooltip: [],
      grouptime: [],
      oldgrouptime: [],
      timelimit: [
        "12:00",
        "12:30",
        "13:00",
        "13:30",
        "14:00",
        "14:30",
        "15:00",
        "15:30",
        "16:00",
        "17:00",
        "17:30",
        "18:00",
        "18:30",
        "19:00",
        "19:30",
        "20:00",
        "20:30",
        "21:00",
        "21:30",
        "22:00",
        "22:30",
        "23:00",
        "23:30",
        "00:00",
        "00:30",
        "01:00",
        "01:30",
        "02:00",
        "02:30",
        "03:00",
        "03:30",
        "04:00",
        "04:30",
        "05:00",
        "05:30",
        "06:00",
        "06:30",
        "07:00",
        "07:30",
        "08:00",
        "08:30",
        "09:00",
        "09:30",
        "10:00",
        "10:30",
        "11:00",
        "11:30"
      ],
      people: [],
    };
  },
  components: {},
  methods: {
    search: function() {
      this.choice = true;
      this.state = false;
      let data = {};
      data.groupname = this.groupvalue;
      let myInit = {
        method: "Post",
        body: JSON.stringify(data)
      };
      fetch(`http://39.108.79.110:1500/api/gettime/`, myInit)
        .then(res => {
          if (res.ok) {
          } else if (res.status === 404) {
            alert("不存在这个group name");
          } else {
            alert("服务器发生错误");
          }
        })
        .then(value => {
          let i = 0;
          for (let date in value) {
            for (let hour in date) {
              this.grouptime[i].push(hour.member_count);
            }
            i++;
          }
          this.oldgrouptime = this.grouptime;
        })
        .catch(error => {
          console.log(
            "There has been a problem with your fetch operation:" +
              error.message
          );
        });
    },
    creatchoice: function() {
      this.choice = true;
      this.state = false;
    },
    add: function(arr, index) {
      this.grouptime[arr][index] += 1;
    },
    post: function() {
      let data = {};
      let postarr = [];
      data.username = this.username;
      data.groupname = this.groupvalue;
      data.start_date = this.selectdate;
      for (let i = 0; i < 7; i++) {
        for (let j = 0; j < 48; j++) {
          postarr.push(grouptime[i][j] - oldgrouptime[i][j]);
        }
      }
      data.time = postarr;
      fetch(`http://39.108.79.110:1500/api/givetime/`, myInit)
        .then(res => {
          if (res.ok) {
            console.log("ok");
          } else {
            alert("服务器发生错误");
          }
        })
        .then(value => {
          alert("提交成功");
        })
        .catch(error => {
          console.log(
            "There has been a problem with your fetch operation:" +
              error.message
          );
        });
    },
    login: function() {
      if (
        this.namevalue === null ||
        this.groupvalue === null ||
        this.selectdate === null
      ) {
        alert("请将信息填完整");
      } else {
        this.state=false;
        this.postbtn = true;
        this.choice = false;
        this.table = true;
        let data = {};
        data.groupname = this.groupvalue;
        let myInit = {
          method: "Post",
          body: JSON.stringify(data)
        };
        fetch(`http://39.108.79.110:1500/api/gettime/`, myInit)
          .then(res => {
            if (res.ok) {
            } else if (res.status === 404) {
              alert("不存在这个group name");
            } else {
              alert("服务器发生错误");
            }
          })
          .then(value => {
            let i = 0;
            for (let date in value) {
              for (let people in date) {
                this.people[i].push(people.member);
              }
              this.people[i].reduce(function(peo, index, collec, acummulate) {
                acummulate += peo.string();
                return acummulate;
              }, "");
              for (let hour in date) {
                this.grouptime[i].push(hour.member_count);
              }
              i++;
            }
          })
          .catch(error => {
            console.log(
              "There has been a problem with your fetch operation:" +
                error.message
            );
          });
      }
    }
  }
};
</script>

<style lang="scss">
/*unrelated styling*/
@import "~vue-material/dist/theme/engine"; // Import the theme engine
@include md-register-theme("default", (
  primary: md-get-palette-color(blue, A200) 
));

@import "~vue-material/dist/theme/all"; // Apply the theme
//  @import url(https://fonts.googleapis.com/css?family=Open+Sans:300,400);
.have {
  color: green;
}
.outtr {
  float: left;
}
.center {
  position: absolute;
  left: 50%;
  top: 15vh;
  transform: translateX(-70%);
}
.card {
  margin: 20px;
}
.state {
  margin-top: 20% !important;
}
.page-container {
  min-height: 300px;
  overflow: hidden;
  position: relative;
  border: 1px solid rgba(#000, 0.12);
}

// Demo purposes only
.md-drawer {
  width: 230px;
  max-width: calc(100vw - 125px);
}

.md-content {
  padding: 16px;
}
body {
  background: #fafafa;
  font-family: sans-serif;
  // padding: 10px;
}

*,
*:before,
*:after {
  margin: 0;
  padding: 0;
  border: 0;
  outline: 0;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

#overlay {
  background-color: rgba(46, 204, 113, 0.94);
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
  font-family: "Open Sans", Helvetica;
}

.corVermelha {
  background: #da2424 !important;
}
.corVerde {
  background: #bdff3b !important;
}

.blue {
  background: #3498db;
}

.purple {
  background: #9b59b6;
}

.navy {
  background: #34495e;
}

.green {
  background: #2ecc71;
}

.red {
  background: #e74c3c;
}

.orange {
  background: #f39c12;
}

.cs335,
.cs426,
.md303,
.md352,
.md313,
.cs240 {
  font-weight: 300;
  cursor: pointer;
}

table {
  font-family: "Open Sans", Helvetica;
  color: #100f0f;
}
table tr:nth-child(2n) {
  background: #eff0f1;
}
table tr:nth-child(2n + 3) {
  background: #fff;
}
table th,
table td {
  padding: 1em;
  width: 10em;
}

.days,
.time {
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

header,
footer {
  display: block;
  margin: 4px;
  padding: 4em;
  min-height: 100px;
  /*border: 1px solid #eebb55;*/
  /*border-radius: 7pt;*/

  background-color: #17bebb;
  border-bottom: 0.5em solid #2e282a;
  color: #2e282a;
  text-align: center;
  /*margin-bottom: 2em;*/
  /*padding: 4.5em 2em;*/
}
.hero {
  background-color: #17bebb;
  border-bottom: 0.5em solid #2e282a;
  color: #2e282a;
  text-align: center;
  /*margin-bottom: 2em;*/
  padding: 4.5em 2em;
}

.hero p {
  margin-bottom: 0;
}
h1 {
  font-family: "Roboto Slab";
  font-size: 100%;
  margin: 0 0 0.25em;
}

/*List*/

h1 {
  color: #fff;
  text-align: center;
  font-size: 40px;
  font-weight: 100;
}

ul {
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

input[type="checkbox"] {
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

label {
  background: #34495e;
  height: 69px;
  width: 100%;
  display: block;
  border-bottom: 1px solid #2c3e50;
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

label h2 span {
  display: block;
  font-size: 5px;
  text-transform: capitalize;
  font-weight: normal;
  color: #bdc3c7;
}

label:before {
  content: "";
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

#label-1:checked ~ label[for="label-1"],
#label-2:checked ~ label[for="label-2"],
#label-3:checked ~ label[for="label-3"],
#label-4:checked ~ label[for="label-4"],
#label-5:checked ~ label[for="label-5"] {
  background: #2c3e50;
  border-bottom: 1px solid #34495e;
  color: #1abc9c;
}

#label-1:checked ~ label[for="label-1"] h2 span,
#label-2:checked ~ label[for="label-2"] h2 span,
#label-3:checked ~ label[for="label-3"] h2 span,
#label-4:checked ~ label[for="label-4"] h2 span,
#label-5:checked ~ label[for="label-5"] h2 span {
  color: #1abc9c;
}

#label-1:checked ~ label[for="label-1"]:before,
#label-2:checked ~ label[for="label-2"]:before,
#label-3:checked ~ label[for="label-3"]:before,
#label-4:checked ~ label[for="label-4"]:before,
#label-5:checked ~ label[for="label-5"]:before {
  /*background: url("https://designmodo.github.io/Flat-UI/images/todo/done.png") no-repeat center center;*/
  background-color: #f90;
  border: 1px solid #1abc9d;
}

li:first-child label {
  height: 50px;
  text-transform: uppercase;
  /*font-size: 12px;*/
  border-right: 8px solid #f87c85;
  padding-top: 5%;
  padding-bottom: 5%;
}

li:first-child label:before {
  top: 40%;
}

li:first-child label:after {
  height: 149px;
}

li:nth-child(2) label {
  border-right: 8px solid #feb47f;
}

li:nth-child(3) label {
  border-right: 8px solid #3498db;
}

li:nth-child(4) label {
  border-right: 8px solid #b985ea;
}

li:last-child label {
  border-right: 8px solid #43d6b0;
}

.list-header {
  background: #8bc34a;
  padding: 5%;
  font-size: 14px;
}

/* Too narrow to support three columns */
@media screen and (max-width: 680px) {
  #main,
  #page {
    flex-direction: column;
  }

  #main > article,
  #main > nav,
  #main > aside {
    /* Return them to document order */
    order: 0;
  }

  #main > nav,
  #main > aside,
  header {
    min-height: 50px;
    max-height: 50px;
  }
}
</style>
