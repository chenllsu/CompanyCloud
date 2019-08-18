<template>
  <div>
    <el-row>
      <!--侧边栏-->
      <el-col :span="5">
        <vsidebar @selectPageItem="selectPageItem"></vsidebar>
      </el-col>
      <el-col :span="19">
        <!--企业基础信息展示-->
        <div class="company-head-wrapper">
          <div class="logo-wrapper">
            <img src="../img/companyAllInfo/sida.jpg" class="company-logo"/>
          </div>
          <div class="company-info-wrapper">
            <div class="company-name ">
              {{companyInfo.name}}
            </div>
            <div class="company-en-name">{{companyInfo.enName}}</div>
            <!--星级展示-->
            <div class="starinfo-wrapper">
              <div>
                <span class="star-head">资产水平:</span>
                <span v-for="i in companyInfo.money">
                  <img src="../img/星星.png" class="star"/>
                </span>
              </div>
              <div>
                <span class="star-head">企业规模:</span>
                <span v-for="i in companyInfo.scale">
                  <img src="../img/星星.png" class="star"/>
                </span>
              </div>
              <div>
                <span class="star-head">总影响度:</span>
                <span v-for="i in companyInfo.inf">
                  <img src="../img/星星.png" class="star"/>
                </span>
              </div>
              <div>
                <span class="star-head">信用评级:</span>
                <span v-for="i in companyInfo.credit">
                  <img src="../img/星星.png" class="star"/>
                </span>
              </div>
            </div>
          </div>
        </div>
        <!--企业介绍-->
        <div class="company-intro-wrapper">
          <el-divider content-position="left"><span class="company-intro-head">企业简介</span></el-divider>
         <div style="background-color: rgba(208,206,208,0.81); border-radius: 2px; padding: 1px 10px;">
           <p>四达时代集团创立于1988年，是中国广播电视行业最具影响力的系统集成商、技术提供商、网络运营商和内容提供商。正朝着有全球影响力的传媒集团目标迈进。</p>
           <p>2002年，四达时代远渡重洋，开启了与非洲各国携手并肩，共同推动社会数字化、信息化的伟大事业。已在卢旺达、尼日利亚、肯尼亚、坦桑尼亚、乌干达、莫桑比克、几内亚、刚果（金）、南非等30多个国家注册成立公司并开展数字电视运营，发展用户近千万，成为非洲大陆发展最快、影响最大的数字电视运营商。</p>
           <p> 四达时代自创始之日起，始终秉持和谐、共赢的发展理念，坚守创新、诚信、勤俭、敬业的价值导向，把履行社会责任作为企业义不容辞的义务，赢得了国内外的广泛认可和尊重。</p>
           <p>“潮平两岸阔，风正一帆悬”。如今的四达时代正以国际化的视野，坚实自信的步伐，将事业不断推向前进，一个有全球影响力的传媒集团必将出现在世界的东方。</p>
         </div>
        </div>
        <!--信用信息-->
        <div class="credit-wrapper">
          <el-divider content-position="left">
            <span class="company-intro-head">信用信息</span>
          </el-divider>
          <span class="credit-score">A</span>
          <div class="credit-text">
            <div class="credit-head">信用良好</div>
            <div class="credit-info">
              企业的信用程度良好，在正常情况下偿还债务没有问题。该类企业具有良好的信用记录，经营处于良性循环状态，但是可能存在一些影响其未来经营与发展的不确定因素，进而削弱其盈利能力和偿还能力。
            </div>
          </div>
          <div class="table-wrapper">
            <el-table
              :data="companyInfo.creditTableInfo.taxInfo"
              border
              :row-class-name="tableRowClassName">
              <el-table-column
                prop="name"
                align="center"
                label="税务登记信息">
              </el-table-column>
              <el-table-column
                prop="info"
                align="center"
                label="表现情况">
              </el-table-column>

            </el-table>
          </div>
          <div class="table-wrapper">
            <el-table
              :data="companyInfo.creditTableInfo.taxInfo2"
              border
              :row-class-name="tableRowClassName">
              <el-table-column
                prop="name"
                align="center"
                label="纳税申报情况">
              </el-table-column>
              <el-table-column
                prop="info"
                align="center"
                label="表现情况">
              </el-table-column>
            </el-table>
          </div>
          <!--图表展示-->
          <div class="chart-wrapper">
            <div id="redarChart" :style="{width: '400px', height: '400px'}"></div>
            <div id="mapchart"></div>
          </div>
        </div>
        <div class="company-show">
          <el-divider content-position="left">
            <span class="company-intro-head">详情介绍</span>
          </el-divider>
          <p>北京四达时代通讯网络技术有限公司始创与1988年，是中国以有线电视为基础的宽带网络领域中最具实力和规模的大型系统集成商、核心技术及产品提供商和网络运营商。公司集模拟技术、数字网络技术和数字电视技术于一身，与世界范围内领先的技术提供商、设备生产商和软件开发商有着紧密和广泛的合作。2002年12月25日在北京中关村注册成立了北京四达时代软件技术有限公司（简称四达软件），注册资本1.0607亿元。自成立之初，便致力于成为行业内具备影响力的有线数字电视整体解决方案提供商和有线数字电视增值服务提供商。为此，公司对业务进行了清晰的定位，即专注于为广电网络运营商提供有线数字电视前端和终端解决方案，包括提供软件产品及系统集成、系统维护以及网络改造服务，以及提供开展广电网络增值服务的视频超市软件系统及相关系统集成服务。</p>
          <img src="../img/44.jpg" style="width: 90%; margin-left: 5%"/>
        </div>
      </el-col>
    </el-row>

  </div>
</template>

<script>
  import sidebar from './sidebar'
  import echarts from 'echarts'
  export default {
    name: "companyAllInfo",
    components: {
      vsidebar: sidebar
    },
    data() {
      return {
        companyInfo: {
          name: '四达时代',
          enName: 'StarTimes',
          money: 3,
          scale: 4,
          inf: 3,
          credit: 4,
          creditTableInfo:{
            taxInfo: [
              {
                name: '开业登记',
                info: '√'
              },
              {
                name: '扣缴税款登记',
                info: '√'
              },
              {
                name: '税务变更登记',
                info: '√'
              }
            ],
            taxInfo2: [
              {
                name: '按期纳税申报率',
                info: '100%'
              },
              {
                name: '按期纳税申报准确率',
                info: '98%'
              },
              {
                name: '代扣代缴按期申报率',
                info: '96%'
              }
            ]
          }
        }
      }
    },
    methods: {
      selectPageItem(pageIndex) {
      },
      tableRowClassName({row, rowIndex}) {
        if (rowIndex === 1) {
          return 'warning-row';
        } else if (rowIndex === 3) {
          return 'success-row';
        }
        return '';
      },
      draw1(){
        let echarts = require('echarts');
        let myChart = echarts.init(document.getElementById('redarChart'));
        let option = {
          title: {
            text: '纳税情况'
          },
          tooltip: {
            trigger: 'axis'
          },
          legend: {
            data:['该企业', '同类企业']
          },
          radar: [
            {
              indicator: (function (){
                var res = [];
                for (var i = 1; i <= 12; i++) {
                  res.push({text:i+'月',max:100});
                }
                return res;
              })(),
              center: ['40%','40%'],
              radius: 80
            }
          ],
          series: [
            {
              type: 'radar',
              itemStyle: {normal: {areaStyle: {type: 'default'}}},
              data: [
                {
                  name: '该企业',
                  value: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 75.6, 82.2, 48.7, 18.8, 6.0, 2.3],
                },
                {
                  name:'同类企业',
                  value:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 35.6, 62.2, 32.6, 20.0, 6.4, 3.3]
                }
              ]
            }
          ]
        };
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
      },
      mapDraw() {
        let echarts = require('echarts');
        let mapchart = echarts.init(document.getElementById('mapchart'));
        function getVirtulData(year) {
          year = year || '2017';
          var date = +echarts.number.parseDate(year + '-01-01');
          var end = +echarts.number.parseDate((+year + 1) + '-01-01');
          var dayTime = 3600 * 24 * 1000;
          var data = [];
          for (var time = date; time < end; time += dayTime) {
            data.push([
              echarts.format.formatTime('yyyy-MM-dd', time),
              Math.floor(Math.random() * 10000)
            ]);
          }
          return data;
        }

        let option = {
          title: {
            left: 'left',
            text: '企业流水统计'
          },
          tooltip : {},
          visualMap: {
            min: 0,
            max: 10000,
            type: 'piecewise',
            orient: 'horizontal',
            left: 'center',
            top: 30,
            textStyle: {
              color: '#000'
            }
          },
          calendar: {
            top: 80,
            left: 30,
            right: 30,
            cellSize: ['auto', 13],
            range: '2018',
            itemStyle: {
              normal: {borderWidth: 0.5}
            },
            yearLabel: {show: false}
          },
          series: {
            type: 'heatmap',
            coordinateSystem: 'calendar',
            data: getVirtulData(2018)
          }
        };
        mapchart.setOption(option);
      }
    },
    mounted() {
      this.draw1();
      this.mapDraw();
    }
  }
</script>

<style scoped>
  .company-head-wrapper {
    padding-top: 3%;
  }

  .logo-wrapper {
    display: inline-block;
    overflow: hidden;
    width: 25%;
    height: 180px;
    border-right: 2px solid gray;
    padding-right: 20px;
    margin-right: 10px;
  }

  .name-padding {
    padding-left: 10px;
  }

  .company-logo {
    float: right;
    width: 40%;
    padding: 10%;
    border: 1px solid gray;
    border-radius: 5px;
  }

  .company-info-wrapper {
    display: inline-block;
    vertical-align: top;
  }

  .company-name {
    font-size: 30px;
    font-weight: bolder;
  }

  .company-en-name {
    font-size: 18px;
    color: gray;
  }

  .starinfo-wrapper {
    width: 180px;
    margin: 10px 0;
    padding: 5px 10px;
    background-color: rgba(0, 143, 133, 0.5);
    border: 1px dashed black;
    border-radius: 3px;
  }

  .star-head {
    font-size: 13px;
  }

  .star {
    width: 15px;
    vertical-align: -1px;
  }
  .company-intro-wrapper {
    margin: 10px 40px;
  }
  .company-intro-head {
    font-size: 20px;
    font-weight: bolder;
    color: black;
  }
  p {
    text-indent: 2em;
    font-size: 15px;
  }
  .credit-score {
    display: inline-block;
    font-size: 80px;
    color: greenyellow;
    font-weight: bolder;
    width: 20%;
    text-align: right;
    padding-right: 10px;
    border-right: 2px solid gray;
  }
  .credit-text {
    display: inline-block;
    width: 70%;
    padding-left: 10px;
  }
  .credit-head {
    font-size: 30px;
    font-weight: bolder;
  }
  .credit-info {
    margin-top: 10px;
    font-size: 13px;
  }
  .table-wrapper {
    margin-top: 30px;
    display: inline-block;
    width: 48%;
  }

  #redarChart {
    display: inline-block;
    width: 400px;
    height: 400px;
    margin-top: 20px;
  }
  #mapchart {
    display: inline-block;
    width: 600px;
    height: 400px;
  }
</style>
