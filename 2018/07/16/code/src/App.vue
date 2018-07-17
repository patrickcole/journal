<template>
  <div id="app" v-scroll="onScroll">
    <div class="card" 
      v-for="(card, index) in styledCards"
      :style="card.style"
      :key="index">
      <img class="card__image" :src="card.img">      
      <div class="card__content">
        <h3 class="card__title">{{card.title}}</h3>
        <p class="card__description">{{card.description}}</p>
        <div class="card__rating">
          <span>{{card.rating | oneDecimal}}</span>
          <span class="card__stars--active">{{card.stars | toStars}}</span><span class="card__stars--inactive">{{ 5 - card.stars | toStars}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  const cardsData = [
    {
      img:'https://placeimg.com/100/140/animals',
      title: 'Title 1',
      description: 'Tempora quam ducimus dolor animi magni culpa neque sit distinctio ipsa quos voluptates accusantium possimus earum rerum iure',
      rating: 9.5,
      stars: 4
    },
    {
      img:'https://placeimg.com/100/140/arch',
      title: 'Title 2',
      description: 'Tempora quam ducimus dolor animi magni culpa neque sit distinctio ipsa quos voluptates accusantium possimus earum rerum iure',
      rating: 8.4,
      stars: 5
    },
    {
      img:'https://placeimg.com/100/140/people',
      title: 'Title 3',
      description: 'Tempora quam ducimus dolor animi magni culpa neque sit distinctio ipsa quos voluptates accusantium possimus earum rerum iure',
      rating: 7.234,
      stars: 2
    },
    {
      img:'https://placeimg.com/100/140/animals',
      title: 'Title 1',
      description: 'Tempora quam ducimus dolor animi magni culpa neque sit distinctio ipsa quos voluptates accusantium possimus earum rerum iure',
      rating: 9.5,
      stars: 4
    },
    {
      img:'https://placeimg.com/100/140/arch',
      title: 'Title 2',
      description: 'Tempora quam ducimus dolor animi magni culpa neque sit distinctio ipsa quos voluptates accusantium possimus earum rerum iure',
      rating: 8.4,
      stars: 5
    },
    {
      img:'https://placeimg.com/100/140/people',
      title: 'Title 3',
      description: 'Tempora quam ducimus dolor animi magni culpa neque sit distinctio ipsa quos voluptates accusantium possimus earum rerum iure',
      rating: 7.234,
      stars: 2
    },
    {
      img:'https://placeimg.com/100/140/animals',
      title: 'Title 1',
      description: 'Tempora quam ducimus dolor animi magni culpa neque sit distinctio ipsa quos voluptates accusantium possimus earum rerum iure',
      rating: 9.5,
      stars: 4
    },
    {
      img:'https://placeimg.com/100/140/arch',
      title: 'Title 2',
      description: 'Tempora quam ducimus dolor animi magni culpa neque sit distinctio ipsa quos voluptates accusantium possimus earum rerum iure',
      rating: 8.4,
      stars: 5
    },
    {
      img:'https://placeimg.com/100/140/people',
      title: 'Title 3',
      description: 'Tempora quam ducimus dolor animi magni culpa neque sit distinctio ipsa quos voluptates accusantium possimus earum rerum iure',
      rating: 7.234,
      stars: 2
    },
    {
      img:'https://placeimg.com/100/140/animals',
      title: 'Title 1',
      description: 'Tempora quam ducimus dolor animi magni culpa neque sit distinctio ipsa quos voluptates accusantium possimus earum rerum iure',
      rating: 9.5,
      stars: 4
    },
    {
      img:'https://placeimg.com/100/140/arch',
      title: 'Title 2',
      description: 'Tempora quam ducimus dolor animi magni culpa neque sit distinctio ipsa quos voluptates accusantium possimus earum rerum iure',
      rating: 8.4,
      stars: 5
    },
    {
      img:'https://placeimg.com/100/140/people',
      title: 'Title 3',
      description: 'Tempora quam ducimus dolor animi magni culpa neque sit distinctio ipsa quos voluptates accusantium possimus earum rerum iure',
      rating: 7.234,
      stars: 2
    }
  ];

  export default {
    
    name: 'App',
    data() {
      return {
        cards: cardsData,
        scrollPosition: 0
      }
    },
    filters: {
      oneDecimal: function (value) {
        return value.toFixed(1)
      },
      toStars: function (value) {
        let result = ''
        while(result.length < value) {
          result+='★' 
        }
        return result
      }
    },
    computed: {
      styledCards () {
        return this.cards.map(this.calculateCardStyle)
      }
    },
    methods: {
      onScroll () {
        this.scrollPosition = window.scrollY
      },
      calculateCardStyle (card, index) {
        const cardHeight = 173 // height + padding + margin
        
        const positionY = index * cardHeight
        const deltaY = positionY - this.scrollPosition

        // constrain deltaY between -160 and 0
        const dY = this.clamp(deltaY, -cardHeight, 0)

        const dissapearingValue = (dY / cardHeight) + 1
        const zValue = dY / cardHeight * 50
        const yValue = dY / cardHeight * -20

        card.style = {
          opacity: dissapearingValue,
          transform: `perspective(100px) translate3d(0,${yValue}px, ${zValue}px)`
        }
        return card
      },
      clamp (value, min, max) {
        return Math.min(Math.max(min, value), max)
      }
    }
  }
</script>