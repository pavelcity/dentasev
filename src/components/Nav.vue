<template>
	<div class="uk-container" >
		<nav class="uk-navbar-container uk-margin" uk-navbar="offset: -20" style="z-index: 980;" uk-sticky="bottom: #offset">
    <div class="uk-navbar-center">

        <div class="uk-navbar-center-left"><div>
            <ul class="uk-navbar-nav">
							<li>
                <a href="#" class="humb"><i class="mdi mdi-forwardburger"></i>Протезирование</a>
                <div class="uk-navbar-dropdown">
                    <ul class="uk-nav uk-navbar-dropdown-nav">
											<router-link tag="li" to="/metalokeramika" active-class="uk-active"><a>Металлокерамика</a></router-link>
											<router-link tag="li" to="/neylon" active-class="uk-active"><a>Нейлоновые</a></router-link>
											<router-link tag="li" to="/acril" active-class="uk-active"><a>Акриловые</a></router-link>
											<router-link tag="li" to="/implant" active-class="uk-active"><a>Имплантация</a></router-link>
                    </ul>
                </div>
            </li>
							<router-link tag="li" to="/two" active-class="uk-active"><a>Прайс</a></router-link>
            </ul>
        </div></div>
				<router-link to="/"  active-class="uk-active"><a class="uk-navbar-item uk-logo mainLogo"><i class="mdi mdi-tooth"></i></a></router-link>

        <div class="uk-navbar-center-right"><div>
            <ul class="uk-navbar-nav">
                <router-link tag="li" to="/contacts" active-class="uk-active"><a>Контакты</a></router-link>
								<li><a class="callPhone" href="tel:+79787030559">+7 (978) 703-05-59</a></li>
            </ul>
        </div></div>

				

    </div>
</nav>
	</div>
</template>


<script>
export default {
	data () {
		return {
			ms: 'dentaSev'
		}
	}
}
</script>



<style>
.mainLogo i{
	color:#3498db;
}

.callPhone {
	color:#3498db !important;
}

.humb i {
	/* color:#3498db; */
	margin-right: 10px;
	font-size: 18px;
	transition: ease .4s;
}

.humb:hover i{
	transform: rotate(90deg);
}
</style>