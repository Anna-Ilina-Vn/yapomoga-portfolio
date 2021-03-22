<template>
<div class="user-rate">
  <div class="user-rate__header"> 
    <div class="text_size-l">Мій рейтинг <span clas="text_size-xxl">400</span></div>
    <label><input type="text" placeholder="Знайти себе у рейтингу" v-model="search"/></label>
  </div>
  <div class="table">
    <div class="table-header">
      <div class="table-row text_size-l">
        <div class="item">Місце</div>
        <div class="item">Учасник</div>
        <div class="item">Нашивки</div>
        <div class="item">Подаровано Бонусів Добра</div>
      </div>
    </div>
    <div class="table-body">
      <div class="table-row" v-for="(user, index) in filteredUsers" :key="index">
        <div class="item text_size-xxl">{{user.rate}}</div>
        <div class="item text_size-l">
          <img src="~/assets/svg/avatar-male.svg"/>
          {{user.name}}
        </div>
        <div class="item">{{user.stripe}}</div>
        <div class="item text_size-xxl">{{user.sum}}</div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import IButton from "~/components/i-button.vue";

const user = (name, stripe, sum, rate) => ({name, stripe, sum, rate})

const users = [
  user('Стовпова Наталія', 'stripe', 100, '1'),
  user('Дорога Марія', 'stripe', 300, '2'),
  user('Ільїна Анна', 'stripe', 200, '3'),
]

export default {
  name: 'UserDetails',
  data: () => ({
    users: users,
    user: users[0],
    selectedUserIndex: 0,
    search: ''
  }),
  components: {
    IButton,
  },
  methods: {
    selectUser: function(index) {
      this.user = users[index]
      this.selectedUserIndex = index
    }
  },
  computed: {
    filteredUsers() {
      return this.users.filter(user=>{
        return user.name.indexOf(this.search) > -1 || user.rate.indexOf(this.search) > -1
      })
    }
  }
}
</script>

<style scoped lang="scss">
  $height: 324px;
  .user-rate__header {
    display: flex;
    justify-content: space-between;

    span {
      color: var(--main_second-color);
      line-height: 38px;
    }

    input {
      width: 220px;
      height: 38px;
      border-radius: 30px;
      border: 1px solid black;
      padding: 0 46px 0 18px;
    }

    label {
      position: relative;
    }

    label::after {
      content: '';
      display: block;
      width: 16px;
      height: 16px;
      position: absolute;
      background-image: url('../../assets/svg/loop.svg');
      background-color: divansparent;
      background-repeat: no-repeat;
      top: 12px;
      right: 14px;
    }
  }
  .table {
    width: 100%;
    margin-top: 30px;
    border: 1px solid black;

    .table-row {
      display: flex;
      text-align: center;
      justify-content: center;

      .item {
        flex: 1 1 auto;
      }

      .item:nth-of-type(1) {
        width: 100px;
      }

      .item:nth-of-type(2) {
        width: 260px;
          display: flex;
          flex-flow: column nowrap;
          align-items: center;
      }

      .item:nth-of-type(4) {
        width: 360px;
      }
    }

    .table-header {
      .table-row {
        border-bottom: 1px solid black;
      }

      .item {
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
    
    .table-body {
      height: calc($height * 2);
      overflow-y: scroll;
      width: 100%;

      .table-row:not(:first-of-type) {
        border-top: 1px solid black;
      }

      .item {
        height: $height;
        display: flex;
        align-items: center;
        justify-content: center;

        &:not(:last-of-type) {
          border-right: 1px solid black;
        }
      }
    }
  }

</style>