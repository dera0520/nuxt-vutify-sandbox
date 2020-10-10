<template>
  <v-form ref="form">
    <h1>form</h1>
    <v-row>
      <v-col cols="12">
        <v-text-field
          v-model="model"
          :counter="max"
          :rules="rules"
          label="テキスト入力"
        />
      </v-col>

      <v-col cols="12">
        <v-select
          :items="selectItems"
          label="セレクト入力"
          dense
        />
      </v-col>

      <v-col cols="12">
        <v-autocomplete
          :items="selectItems"
          label="セレクト入力(autocomplete)"
          dense
        />
      </v-col>

      <v-col cols="12">
        <v-select
          :items="selectItems"
          multiple="true"
          label="セレクト入力(multiple)"
          dense
        />
      </v-col>

      <v-col cols="12">
        <v-checkbox
          v-model="allowSpaces"
          label="チェックボックス"
        ></v-checkbox>
      </v-col>

      <v-col cols="12">
        <v-textarea
          label="テキストエリア"
          auto-grow="true"
        />
      </v-col>

      <v-col cols="12">
        <v-menu
          ref="menu"
          v-model="menu"
          :close-on-content-click="false"
          transition="scale-transition"
          offset-y
          min-width="290px"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              v-model="dateRangeText"
              label="DateRange"
              prepend-icon="mdi-calendar"
              v-bind="attrs"
              v-on="on"
              readonly
            />
          </template>

          <v-date-picker
            v-model="dates"
            @change="save"
            range
          />

        </v-menu>
      </v-col>

      <v-col cols="12">
        <v-slider
          v-model="max"
          label="スライダー"
        />
      </v-col>

      <v-col cols="12">
        <v-btn
          :disabled="!valid"
          color="success"
          class="mr-4"
          @click="validate"
        >
          送信
        </v-btn>
        <v-btn
          color="error"
          class="mr-4"
          @click="reset"
        >
          リセット
        </v-btn>
        <v-btn
          color="warning"
          @click="resetValidation"
        >
          Reset Validation
        </v-btn>
      </v-col>
    </v-row>
  </v-form>
</template>
<script>
export default {
  data: () => ({
    selectItems: ['セレクト１', 'セレクト２', 'セレクト３', 'セレクト４'],
    allowSpaces: false,
    match: 'Foobar',
    max: 0,

    // 日付
    date: '2020-01-01',
    dates: ['2020-01-01', '2020-01-31'],

    // 検証処理
    valid: true,
    name: '',
    nameRules: [
      v => !!v || '名前を入力してください',
      v => (v && v.length <= 10) || '名前は最低10文字で入力してください',
    ],
    email: '',
    emailRules: [
      v => !!v || 'メールアドレスを入力してください',
      v => /.+@.+\..+/.test(v) || '入力を確認してください',
    ],
    select: null,
    items: [
      'Item 1',
      'Item 2',
      'Item 3',
      'Item 4',
    ],
    checkbox: false,

  }),

  computed: {
    dateRangeText() {
      return this.dates.join(' ~ ')
    },
    rules() {
      const rules = []

      if (this.max) {
        const rule =
          v => (v || '').length <= this.max ||
            `A maximum of ${this.max} characters is allowed`

        rules.push(rule)
      }

      if (!this.allowSpaces) {
        const rule =
          v => (v || '').indexOf(' ') < 0 ||
            'No spaces are allowed'

        rules.push(rule)
      }

      if (this.match) {
        const rule =
          v => (!!v && v) === this.match ||
            'Values do not match'

        rules.push(rule)
      }
      return rules
    },
  },

  watch: {
    match: 'validateField',
    max: 'validateField',
    model: 'validateField',
  },

  methods: {
    validateField() {
      this.$refs.form.validate()
    },
    save (date) {
      this.$refs.menu.save(date)
    },
  },
}
</script>
