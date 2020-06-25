<script>
import { Radar } from 'vue-chartjs'
export default {
  extends: Radar,
  data () {
    return {
      data: {
        label: false,
        labels: ["HTML", "CSS", "Javascript", "Vue.js","Vuetify"],
        datasets: [{
          data: [5, 4, 3, 3, 4],
          label: false,
          borderColor: '#001b6d',
          borderWidth: 2,
          backgroundColor: 'rgba(41, 65, 165, 0.15)',
          pointRadius: 0
        }]
      },
      options: {
        legend: {
          display: false
        },
        tooltips: {
          enabled: false
        },
        scale: {
          pointLabels: {
            fontSize: 16,
            fontColor: 'rgba(32, 42, 147, 0.95)',
            fontFamily: "'Montserrat', sans-serif"
          },
          ticks: {
            max: 5,
            stepSize: 1,
            beginAtZero: true
          }
        }
      }
    }
  },
  mounted () {
    this.renderChart(this.data, this.options)
  }
}
</script>
