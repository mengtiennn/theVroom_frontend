<template>
    <v-dialog
        transition="dialog-top-transition"
        max-width="600"
        v-model="dialog"
        >
        <template v-slot:activator="{ on, attrs }">
            <v-btn
            color="#F34841"
            v-bind="attrs"
            v-on="on"
            width="70"
            dark
            rounded
            >
            <v-icon>mdi-gavel</v-icon>
            </v-btn>
        </template>
        <template v-slot:default="dialog">
            <v-card>
                <v-toolbar
                color="#F34841"
                dark
                >
                    <div class="text-h6 ml-10">
                    尚未登入
                    </div>
                </v-toolbar>
                <v-card-text>
                    <div class="text-h6 pa-8">請登入後再開始競標</div>
                </v-card-text>
                <v-card-actions class="justify-end">
                <v-btn
                    text
                    @click="dialog.value = false"
                >取消</v-btn>
                <router-link to="">
                <v-btn
                rounded
                outlined
                color="#181818"
                class="btn ml-4"
                width="120"
                to="/signin"
                dark>
                登入
                </v-btn>
                </router-link>
                </v-card-actions>
            </v-card>
        </template>
    </v-dialog>
</template>
<script>
export default {
  data () {
    return {
      dialog: false
    }
  },
  methods: {
    startbid () {
      this.dialog = false
      this.$emit('startbid')
    }
  }
}
</script>
