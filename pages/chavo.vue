<template>
  <div id="chavo" class="chavo-page" >
    <h3 class="text_size-xl center">ЧАВО</h3>
      <i-accordion>
        <i-accordion-item v-for="(item, index) in accordeonItems" :key="index">
          <template v-slot:accordionTrigger>
            <span class="accordion-item__title">
              <h3 class="text_size-l">{{index + 1}}. {{item.title}}</h3>
            </span>
          </template>
          <template v-slot:accordionContent>
          
            <span class="accordion-item__body">
              <p class="text_size-l">{{item.body}}</p>
            </span>
          </template>
        </i-accordion-item>
    </i-accordion>
  </div>
</template>

<script>
    import IAccordion from '~/components/accordion/i-accordion.vue';
    import IAccordionItem from '~/components/accordion/i-accordion-item.vue';

    export default {
      layout: 'user',
      data: () => ({
        accordeonItems: [
          {
            title: 'Що це таке?',
            body: 'Це перший в Україні сервіс, який дозволяє робити Добрі Справи за бонусні бали компаній-партнерів.',
          },
          {
            title: 'Як я можу зробити Добрі Справи?',
            body: 'Ви можете стати клієнтом наших партнерів і з кожної покупки / транзакції, Вам будуть нараховані бонусні бали, які Ви зможете в вигляді бонусів Добра відправити на Добрі Справи.',
          },
          {
            title: 'Які партнери вже беруть участь в Япомога?',
            body: 'Список партнерів Ви можете побачити в розділі «Партнери» на нашому сайті.',
          },
          {
            title: 'Як я дізнаюся, що мої Бонуси Добра реально відправили на допомогу і допомогли?',
            body: 'Після кожного закритого кейса (Добра Справа), всі користувачі, які брали участь в зборі бонусів Добра, отримають на свої пошти фото відео та фін звіт за виконані роботи.',
          },
          {
            title: 'Як ви вибираєте Добрі Справи?',
            body: 'Добрые Дела подают нам Благотворительные Организации (список благотворительных организация Вы можете увидеть на нашем сайте , в разделе «Организации» . Совместно с ГО «Черити Тюнер» мы проводим тщательный мониторинг каждого Доброго Дела.',
          },
          {
            title: 'Як ви знаходите Благодійні організації?',
            body: 'Ми співпрацюємо з ГО «Черіті Тюнер», яка займається моніторингом усіх Благодійних організацій. І разом з ними, ми вибираємо.',
          },
          {
            title: 'Що таке нашивки?',
            body: 'Нашивки це віртуальна медаль, яку отримує користувач за Добрі Дії на сайті.',
          },
          {
            title: 'Як отримати нашивки?',
            body: 'Беріть участь в Добрих Справах і виконуйте Добрі Завдання та отримуйте нашивки.',
          }
        ],
        }),
        components: {
            IAccordion,
            IAccordionItem,
        },
        methods: {}
    }
</script>

<style lang="scss">
  header.shrink {
    background-color: #ffffff;
  }
  .progress-bar {
    background: #000000;
  }
  .header-logo {
    path {
      fill: var(--main_second-color);
    }
  }
  .chavo-page {
    padding: 180px 140px 0;
  }
  .text_size-xl {
    padding-bottom: 50px;
  }
  .accordion-item__title, .accordion-item__body {
    display: block;
    width: 100%;
    padding: 20px;
    border: 1px solid var(--main_second-color);
  }
  .accordion-item__title {
    min-height: 20px;
    border-radius: 26px;
    transition: all ease .3s;
  }
  .accordion-item__body {
    border-radius: 0 0 26px 26px;
  }
  .accordion__item{
    max-width: 100%;
    margin: 0 auto 10px;
  }
  .accordion__trigger_active {

    .accordion-item__title {
      color: #ffffff;
      background-color: var(--main_second-color);
      border-radius: 26px 26px 0 0;
    }
  }
</style>
