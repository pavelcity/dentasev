<template>
	<div class="uk-container">
		<div class="uk-h1 uk-text-center titleDoctor">{{ ms }}</div>



		<div class="uk-height-large uk-flex uk-flex-middle uk-flex-middle uk-background-cover "
     data-src="/img/010.jpeg"
     data-srcset="/img/010.jpeg,
                  /img/010.jpeg"
     data-sizes="(min-width: 650px) 650px, 100vw" uk-img>
		<div class="uk-h2 uk-text-center utp" v-html="getUtp.name"></div>
    </div>

	<hr class="uk-divider-icon">

		<div class="features uk-child-width-1-3@m uk-grid-small uk-grid-match" uk-grid>
    <div v-for="(opit, inx) in opits" :key="inx">
        <div class="uk-card uk-card-small uk-card-default uk-card-body uk-flex uk-flex-middle">
            <p>{{ opit.name }}</p>
        </div>
    </div>
   </div>

	<hr class="uk-divider-icon" style="margin-top:25px;">



   <div class="uk-h3 uk-text-center">{{ priceTitle }}</div>

<div class="aboutPrice uk-child-width-1-4@m uk-grid-small" uk-grid>
    <div v-for="(price, inx) in descrPrices" :key="inx">
        <div class="uk-card uk-card-hover uk-card-small uk-card-default">
            <div class="uk-card-media-top">
                <img :src="price.pic" alt="">
            </div>
            <div class="uk-card-body">
                <h3 class="uk-card-title">{{ price.name }}</h3>
                <p>{{ price.price }} <i class="mdi mdi-currency-rub"></i></p>
								<router-link :to="price.to" tag="button" class="uk-button uk-button-small uk-button-primary">{{ price.readBt }}</router-link>
            </div>
        </div>
    </div>
 
</div>


<br>
<br>
<br>

 
	</div>
</template>


<script>
export default {
	data () {
		return {
			ms: 'СТОМАТОЛОГ - ОРТОПЕД. Гуменюк Игорь Евгеньевич',
			opits: [
				{
					name: 'Большой опыт работы в сфере стоматологии'
				},
				{
					name: 'Разумная ценовая политика, позволяющая экономить Ваши деньги'
				},
				{
					name: 'Персональный подход к каждому пациенту'
				},
				{
					name: 'Комплексный подход к ведению заболевания'
				},
				{
					name: 'Протезирование пациентов разных возрастных категорий 18+'
				},
				{
          name: 'Используем эффективные методы лечения'
				}

			],
			priceTitle: 'Услуги',
			descrPrices: [
				{
					pic: '/img/041.jpg',
					name: 'Металлокерамика',
					price: 'от 4 500',
					readBt: 'Узнать больше',
					to: '/metalokeramika'
				},
				{
					pic: '/img/05.jpg',
					name: 'Нейлоновые протезы',
					price: 'от 16 000',
					readBt: 'Узнать больше',
					to: '/neylon'
				},
				{
					pic: '/img/061.jpg',
					name: 'Акриловые протезы ',
					price: 'от 8 000',
					readBt: 'Узнать больше',
					to: '/acril'
				},
				{
					pic: '/img/07.jpg',
					name: 'Имплантация ',
					price: 'от 21 500',
					readBt: 'Узнать больше',
					to: '/implant'
				}
			]
		}
	},
	computed: {
		getUtp () {
			return this.$store.getters.getUtp
		}
	}
}
</script>



<style>
.titleDoctor{
	font-weight: 300;
	font-size: 25px;
	color:#3498DB;
	margin-top: 10px;
}

.utp{
	margin-left: 55px;
	background: rgba(52, 152, 219, .8);
	color:#fff;
	padding: 5px 20px 10px 20px;
	border-radius: 8px;
	font-weight: 500;
}

.features{
	margin-top: 20px;
}

.features p{
text-align: center;
font-weight: 500;
font-size: 18px;
color:#3498DB;
}

.aboutPrice h3{
	font-size: 18px;
	font-weight: 500;
}
</style>