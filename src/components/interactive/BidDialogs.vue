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
                    競標說明
                    </div>
                </v-toolbar>
                <v-card-text>
                    <div class="text-h6 pa-8">請注意！<br/>一旦開始競標並進行出價後，即為同意該項商品之購買，請於下標前確認商品意願及自身能力。
也可以使用自動出價模式讓您更輕鬆進行競標。</div>
                </v-card-text>
                <v-card-actions class="justify-end">
                <v-btn
                    text
                    @click="dialog.value = false"
                >取消競標</v-btn>
                <router-link to="">
                <v-btn
                rounded
                outlined
                color="#181818"
                class="btn ml-4"
                width="120"
                @click="startbid"
                dark>
                開始競標
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
