<template>
    <v-footer
    id="dashboard-core-footer">
        <v-container>
            <v-row
                align="center"
                no-gutters
            >
                <v-col
                    v-for="(link, i ) in links" :key="i"
                    class="text-center mb-sm-0 mb-5"
                    cols="auto"
                >
                    <a
                        :href="link.href"
                        class="mr-3 grey--text"
                        rel="noopener"
                        target="_blank"
                        v-text="link.text"
                    ></a>
                </v-col>
                <v-spacer class="hidden-sm-and-down"></v-spacer>
                <v-col
                    cols="12"
                    md="auto"
                >
                    <div class="body-1 font-weight-light pt-6 pt-md-0 text-center">
                        &copy; 2020, made with
                        <v-icon size="18">
                        mdi-heart
                        </v-icon>
                        by <a href="https://www.creative-tim.com">Ray Developer</a> for a better web.
                    </div>
                </v-col>
            </v-row>
        </v-container>
    </v-footer>
</template>
<script>
export default{
    data: () => ({
        links:[
            {
                href: '#',
                text: 'CodeMoon',
            },
            {
                href: '#',
                text: 'About Us',
            },
            {
                href: '#',
                text: 'Blog',
            },
            {
                href: '#',
                text: 'Licenses',
            },
        ],
    })
}
</script>
<style lang="sass">
  #dashboard-core-footer
    a
      font-size: .825rem
      font-weight: 500
      text-decoration: none
      text-transform: uppercase
</style>
