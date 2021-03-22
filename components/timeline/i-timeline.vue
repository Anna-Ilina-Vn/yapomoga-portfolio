<template>
    <div class="timeline-test">
    <div class="timeline-container__title">
      <h2>Усього пожертвувань:</h2>
      <span class="title">5683</span>
    </div>
      <div class="timeline-container">
        <div class="timeline-wrapper">
          <div class="timeline-slide" v-for="item in items" :key="item.id">
            <div class="time-content">
              <div class="timestamp">
                <span class="date">{{item.title}}</span>
              </div>
              <div class="status">
                <p>{{item.name}}</p>
                <p>{{item.value}} балів</p>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  data: () => ({
    items: [
      { id: '1',
        title: '12:20',
        name: 'На корм',
        value: 200,
      },
      {
        id: '2',
        title: '12:20',
        name: 'На корм',
        value: 200,
      },
      {
        id: '3',
        title: '12:20',
        name: 'На корм',
        value: 200,
      },
      {
        id: '4',
        title: '12:20',
        name: 'На корм',
        value: 200,
      },
      {
        id: '5',
        title: '12:20',
        name: 'На корм',
        value: 200,
      },
    ],
  }),
};
</script>

<style lang="scss" scoped>
.timeline-test {
  padding: 50px 0 0;
}

.timeline-container__title {
  margin: 0 0 0 140px;

  h2 {
    font-style: normal;
    font-weight: 500;
    margin-bottom: 40px;
    font-size: 36px;
  }

  span {
    text-align: center;
    margin: 40px 0;
    color: var(--text_color);
  }
}
.timeline-container {
  width: 100%;
  padding: 70px 0;
  overflow-x: scroll;
}
.timeline-wrapper {
  display: flex;
  margin: 80px 0 50px;
  list-style-type: none;
  padding: 0;
  text-align: center;

  &:before {
    content: '';
    display: inline-block;
    width: 100%;
    height: 1px;
    background-color: #000000;
    position: absolute;
  }
}
.timeline-slide {
  width: 200px;
  text-align: center;
  margin-right: 10px;
  font-size: 18px;
  position: relative;

  .time-content {
    width: 145px;
    min-height: 70px;
    background-color: rgba(245, 231, 105, 0.8);
    border-radius: 10px;
    text-align: center;
    position: relative;
    left: 30px;
    top: 30px;

    &:after {
      content: '';
      display: block;
      border-width: 20px 12px;
      border-style: solid;
      position: absolute;
      left: 50%;
      margin-left: -12px;
    }

    &:before {
      content: '';
      width: 10px;
      height: 10px;
      border-radius: 100%;
      background-color: var(--main_second-color);
      position: absolute;
      left: 50%;
      margin-left: -5px;
    }
  }

  &:nth-of-type(odd) {
    top: -130px;

    .time-content:after {
      border-color: rgba(245, 231, 105, 0.8) transparent transparent transparent;
      bottom: -40px;
    }

    .time-content:before {
      bottom: -35px;
    }
  }

  &:nth-of-type(even) {
    .time-content:after {
      border-color:  transparent transparent rgba(245, 231, 105, 0.8) transparent;
      top: -40px;
    }

    .time-content:before {
      top: -35px;
    }
  }
}
.timestamp {
  font-size: 14px;
  line-height: 24px;
}
.status {
  font-size: 14px;
  line-height: 18px;
}
</style>
