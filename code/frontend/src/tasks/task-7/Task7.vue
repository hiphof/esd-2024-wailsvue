<script setup lang="ts">
const items = [
	{
		"symbol": "🗡️",
		"name": "Iron Dagger",
		"rarity": "common"
	},
	{
		"symbol": "🧪",
		"name": "Healing Potion",
		"rarity": "common"
	},
	{
		"symbol": "🔮",
		"name": "Mana Elixir",
		"rarity": "uncommon"
	},
	{
		"symbol": "🛡️",
		"name": "Steel Shield",
		"rarity": "rare"
	},
	{
		"symbol": "💍",
		"name": "Ring of Strength",
		"rarity": "rare"
	},
	{
		"symbol": "🪓",
		"name": "Dragon Slayer Axe",
		"rarity": "legendary"
	},
	{
		"symbol": "🕊️",
		"name": "Phoenix Feather",
		"rarity": "epic"
	},
	{
		"symbol": "🧥",
		"name": "Cloak of Invisibility",
		"rarity": "epic"
	},
	{
		"symbol": "📖",
		"name": "Spell Tome: Fireball",
		"rarity": "uncommon"
	},
	{
		"symbol": "✨",
		"name": "Golden Amulet",
		"rarity": "legendary"
	}
]

/* NOTE: this is only used as a placeholder to draw a single item */
const arbitraryItem = items[0]
</script>

<template>
	<p>Inventory</p>
	<ul class="inventory">
		<!-- TODO 7.1: use the v-for directive to render all items from the list -->
		<li :class="arbitraryItem.rarity">
			{{ arbitraryItem.name }} {{ arbitraryItem.symbol }}
		</li>
	</ul>
</template>

<style scoped>
.inventory {
	padding: 0;
	list-style: none;
}

.common {
	color: light-dark(#7e7e7e, #a9a9a9);
}

.uncommon {
	color: #5ec58c;
}

.rare {
	color: #26b1fc;
}

.epic {
	color: #9147ff;
}

.legendary {
	color: #ffb347;
}
</style>
