<template>
	<div class="uk-container">
		<div class="uk-h3 uk-text-center titleCont">{{ ms }}</div>
			<hr class="uk-divider-icon">

<div class="uk-text-center" uk-grid>
    <div class="uk-width-1-3@m">
        <div class="uk-card uk-card-default uk-card-body">
					<a href="tel:+79787030559">+7 (978) 703-05-59</a>
					<a class="emailTo" href="mailto:@dentasev@yandex.ru">dentasev@yandex.ru</a>
					<div class="uk-h3 uk-margin-remove doctor">Гуменюк Игорь Евгеньевич</div>
						<img class="uk-border-circle" src="/img/02.jpg" />
					<div class="uk-h4 uk-margin-remove" style="margin:10px 0 !important">СТОМАТОЛОГ — ОРТОПЕД</div>
					<div class="uk-h5 uk-margin-remove">РФ, Севастополь, улица Бутакова, 40</div>
					<div class="uk-h5 uk-margin-remove">ГБУЗС "Стомполиклинника №1"</div>
				</div>
    </div>
    <div class="uk-width-expand@m">
        <div class="uk-card uk-card-default">
<iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A91693b904df4d1e035d818f3bc30e58266d154f4a11c6b0e6385dfb35082c335&amp;source=constructor" width="100%" height="450" frameborder="0"></iframe>
				</div>
    </div>
</div>


	</div>
</template>


<script>
export default {
	data () {
		return {
			ms: 'Контакты'
		}
	}
}
</script>



<style>
.titleCont{
	margin-top: 5px;
}
.emailTo{
	display: block;
	margin-top: 10px;
}

.doctor{
	margin: 15px 0 !important;
}
</style>