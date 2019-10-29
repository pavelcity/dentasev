<template>
	<div class="uk-container">
		<div class="uk-h3 uk-text-center priceList">{{ ms }}</div>
		<hr class="uk-divider-icon">


		<div class="uk-text-left" uk-grid>
    <div class="uk-width-3-4">

		<div class="uk-grid-small" uk-grid  v-for="(list, inx) in listPrices" :key="inx">
    <div class="uk-width-expand" uk-leader>{{ list.descr }} </div>
    <div>{{list.price}} <i class="mdi mdi-currency-rub"></i></div>
		</div>
    </div>
    <div class="uk-width-1-4">
        <div class="uk-card uk-card-hover uk-card-default uk-card-body">
					<iframe  frameborder="no" scrolling="no" width="150" height="280" src="https://yandex.ru/time/widget/?geoid=213&lang=ru&layout=vert&type=analog&face=serif"></iframe>

					<a class="myPhone" href="tel:+79787030559">+7 (978) 703-05-59</a>
					<div class="uk-h3">Гуменюк Игорь Евгеньевич</div>
					<hr>
					<button @click="goHome" class="uk-button uk-button-small uk-button-primary">на главную</button>
				</div>
    </div>
    </div>
		
	</div>
</template>


<script>
export default {
	data () {
		return {
			ms: 'Прайс-лист',
			listPrices: [
				{
					price: '9850',
					descr: 'Штифтово-культевая вкладка (в том числе разборная)'
				},
				{
					price: '10950 ',
					descr: 'Штифтово-культевая вкладка композитная (в том числе разборная)'
				},
				{
					price: '19640',
					descr: 'Штифтово-культевая вкладка на основе диоксида циркония (анестезия, слепки, фиксация)'
				},
				{
					price: '12070',
					descr: 'Штифтово-культевая вкладка на спецсплаве (без стоимости сплава)'
				},
				{
					price: '1090 ',
					descr: 'Снятие слепка двухслойного с одного зубного ряда'
				},
				{
					price: '1460',
					descr: 'Восковое моделирование конструкции WaxUp за одну единицу'
				}
			]
		}
	},
	methods: {
		goHome () {
			this.$router.push('/')
		}
	}
}
</script>


<style>
.priceList{
	margin-top: 5px;
}
.myPhone {
	display: block;
}
</style>