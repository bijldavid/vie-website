<template>
	<article id="over-detail">
		<div class="container">
			<breadcrumbs>
				<NuxtLink to="/">Home</NuxtLink>
				<NuxtLink to="/over">Over ons</NuxtLink>
			</breadcrumbs>

			<h1>Over ons</h1>

			<p class="intro">
				VIE - Vrijheid in Energie is een onafhankelijk kennis- en netwerkplatform dat publieke en private
				partijen samenbrengt rond actuele energievraagstukken.
			</p>
			<p>
				We brengen kennis, expertise en initiatieven bij elkaar en helpen samenwerkingen en projecten verder op
				weg. Omdat VIE niet aan een provincie, programma of organisatie is gebonden, kunnen we vrij schakelen
				tussen verschillende partijen en belangen.
			</p>
			<p>
				Zo vormen we een onafhankelijke schakel tussen kennis, netwerk en uitvoering in de energietransitie.
			</p>
		</div>
	</article>
</template>

<style>
.banner {
	height: 320px;
}

.banner img {
	height: 100%;
	width: 100%;
	object-fit: cover;
}

#over-detail {
	padding: var(--block-padding) var(--inline-padding);
}

#over-detail .container {
	display: grid;
	gap: 1rem;
	width: 100%;
}

#over-detail h1 {
	font-size: var(--h2-size);
}

#over-detail .intro,
#over-detail .container > p:not(.intro) {
	font-family: inter, sans-serif;
	font-size: var(--p-size);
	font-weight: 300;
	color: var(--neutral-900);
}

@media (width > 700px) {
	#over-detail .container {
		max-width: 1000px;
		margin-inline: auto;
	}
}
</style>
