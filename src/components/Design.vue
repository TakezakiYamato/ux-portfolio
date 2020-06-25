<script>
import { Radar } from 'vue-chartjs'
export default {
  extends: Radar,
  data () {
    return {
      data: {
        label: false,
        labels: ["XD", "Figma", "Illustrator", "Photoshop", "STUDIO"],
        datasets: [{
          data: [5, 4, 3, 2, 4],
          label: false,
          borderColor: '#001b6d',
          borderWidth: 2,
          backgroundColor: 'rgba(41, 65, 156, 0.15)',
          pointRadius: 0,
          fontColor: 'white',
          fontSize: 16
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
            fontSize: 14,
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