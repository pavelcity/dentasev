<template>
	<div class="uk-container">
		<div class="uk-h3">{{ ms }}</div>

		<div class="uk-text-left" uk-grid>
    <div class="uk-width-3-4">

		<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In nobis necessitatibus, maxime commodi, molestiae accusamus, cumque fuga provident labore iusto ratione cupiditate. Saepe, provident dolores aspernatur amet inventore molestias vero.</p>
    </div>

    <div class="uk-width-1-4">
        <div class="uk-card uk-card-hover uk-card-default uk-card-body">
					<a href="tel:+79787030559">+7 (978) 703-05-59</a>
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
			ms: 'Нейлоновые протезы'
		}
	},
	methods: {
		goHome () {
			this.$router.push('/')
		}
	}
}
</script>