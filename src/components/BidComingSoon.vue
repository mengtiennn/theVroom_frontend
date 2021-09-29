<template>
    <div class="coming">
        <div class="o-countdown">
            <div class="o-countdown__text mt-5">
                <span class="o-countdown__text-small mr-3 text-h6 font-weight-bold mt-3">距離拍賣會開始還剩</span>
                <span class="o-countdown__text-time">{{ timeNumber }}</span>
                <span class="o-countdown__text-small ml-3 text-h6 font-weight-bold mt-3">{{ timeNoun }}</span>
            </div>
        </div>
    </div>
</template>

<script>
import moment from 'moment'
const _dateFormat = 'Y-MM-DD HH:mm:ss'

export default {
  props: {
    isVisible: {
      type: Boolean,
      required: false,
      default: true
    },
    startsOn: {
      type: String,
      required: true
    },
    endsOn: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      now: moment().format(_dateFormat),
      circleLength: 2 * Math.PI * 60.78
    }
  },
  computed: {
    timeDifference () {
      const a = moment(this.endsOn)
      const b = moment(this.now)
      return a.diff(b)
    },
    totalDays () {
      const a = moment(this.endsOn)
      const b = moment(this.startsOn)
      return moment.duration(a.diff(b)).asDays()
    },
    // Use for percentage of circle calculation
    timeData () {
      return moment.duration(this.timeDifference)
    },
    timeRemaining () {
      return moment.duration(this.timeDifference).humanize().split(' ')
    },
    timeNumber () {
      return this.timeRemaining[0]
    },
    timeNoun () {
      return this.timeRemaining[1]
    },
    percentageRemaining () {
      const segmentLength = this.circleLength / this.totalDays
      return this.circleLength - (segmentLength * this.timeData._data.days)
    }
  }
}
</script>

<style lang="scss">
.coming{
    // border: 1px solid yellow;
    height: 100px;
    // display: flex;
    // justify-content: center;
    // align-items: center;
    // height: 400px;
    // padding: 5rem;
    // Block
    .o-countdown {
    position: relative;
    width: 400px;
    height: 144px;
        // Elements
        .o-countdown__text {
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        // width: 100%;
        // height: 100%;
        font-weight: 400;
        text-align: center;
            .o-countdown__text-time {
            font-size: 46px;
            line-height: 46px;
            font-weight: 800;
            color: #333;
            }

            .o-countdown__text-small {
            font-size: 10px;
            font-weight: 400;
            color: #181818;
            }
        }
    }
}
</style>
