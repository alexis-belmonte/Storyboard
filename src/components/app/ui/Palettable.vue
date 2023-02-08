<script lang="ts">
export default {
    props: {
        "palette": String
    },
    computed: {
        palettableStyle() {
            return {
                "--pt-color":      this.palette ? `var(--sb-${this.palette}-color)` : 'inherit',
                "--pt-dark-color": this.palette ? `var(--sb-${this.palette}-dark-color)` : 'inherit'
            }
        }
    }
};
</script>