<template>
    <v-container fluid>
        <v-layout row>
        <v-layout row wrap>
            <v-flex v-for="(event,i) in events" :key="i" my-5>
                <v-layout row>
                <div class="pa-3">
                <h1> {{ event.title }} </h1>
                <v-subheader> {{ event.date }} </v-subheader>
                <p> {{ event.text }} </p>
                </div>
                <v-img :src="event.image" style="width:40%"></v-img>
                </v-layout>
            </v-flex>
        </v-layout>
        <v-expansion-panel>
    <v-expansion-panel-content
      v-for="(item,i) in 5"
      :key="i"
    >
      <template v-slot:header>
        <div>2018</div>
      </template>
      <v-list>
          <v-list-tile>
                <v-list-content>10.10.2018</v-list-content>
          </v-list-tile>
          <v-list-tile>
                <v-list-content>10.10.2018</v-list-content>
          </v-list-tile>
          <v-list-tile>
                <v-list-content>10.10.2018</v-list-content>
          </v-list-tile>
      </v-list>
    </v-expansion-panel-content>
  </v-expansion-panel>
        </v-layout>
    </v-container>
</template>
<script>
export default {
    data () {
        return {
            events: [
                {
                    title: 'Event1',
                    date: '06.07.2019',
                    text: 'Cupcake ipsum dolor sit amet candy canes brownie. Topping chocolate macaroon. Gingerbread marzipan biscuit sugar plum dessert sesame snaps tiramisu. Chupa chups tiramisu chocolate cake apple pie cake tiramisu toffee. Tootsie roll soufflé cake chocolate candy canes muffin caramels. Chupa chups ice cream cupcake dessert I love sugar plum muffin. Oat cake gingerbread candy canes powder topping ice cream cupcake. Biscuit pie caramels ice cream. Powder I love I love caramels lemon drops I love pudding jujubes I love. I love powder oat cake I love jelly beans biscuit. Chocolate cake cookie danish cupcake topping candy canes toffee. Fruitcake ice cream I love lemon drops marzipan cheesecake fruitcake sweet roll gummi bears. I love tart danish pie marzipan ice cream. Gingerbread tiramisu tiramisu jelly-o carrot cake chocolate muffin halvah. Cheesecake dragée marzipan lollipop cookie. Cookie lollipop gummi bears. Bear claw I love I love. Sesame snaps gummi bears pie dragée danish sugar plum gummi bears topping. Ice cream tiramisu I love. Caramels powder wafer I love jelly-o. Marshmallow candy lemon drops bear claw I love dragée chocolate I love pastry. Chupa chups gummi bears gingerbread tiramisu I love. Pudding I love cupcake cake.',
                    image: require('../assets/events/cupcakes.jpg')
                },
                {
                    title: 'Event2',
                    date: '12.07.2019',
                    text: 'Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat cerebella viventium. Qui animated corpse, cricket bat max brucks terribilem incessu zomby. The voodoo sacerdos flesh eater, suscitat mortuos comedere carnem virus. Zonbi tattered for solum oculi eorum defunctis go lum cerebro. Nescio brains an Undead zombies. Sicut malus putrid voodoo horror. Nigh tofth eliv ingdead. Cum horribilem walking dead resurgere de crazed sepulcris creaturis, zombie sicut de grave feeding iride et serpens. Pestilentia, shaun ofthe dead scythe animated corpses ipsa screams. Pestilentia est plague haec decaying ambulabat mortuos. Sicut zeder apathetic malus voodoo. Aenean a dolor plan et terror soulless vulnerum contagium accedunt, mortui iam vivam unlife. Qui tardius moveri, brid eof reanimator sed in magna copia sint terribiles undeath legionis. Alii missing oculis aliorum sicut serpere crabs nostram. Putridi braindead odores kill and infect, aere implent left four dead.',
                    image: require('../assets/events/zombies.jpg')
                },
                {
                    title: 'Event3',
                    date: '22.07.2019.',
                    text: "I'm bored inside, let me out i'm lonely outside, let me in i can't make up my mind whether to go in or out, guess i'll just stand partway in and partway out, contemplating the universe for half an hour how dare you nudge me with your foot?!?! leap into the air in greatest offense! stare at guinea pigs. Sleep everywhere, but not in my bed eat and than sleep on your face yet climb a tree, wait for a fireman jump to fireman then scratch his face or x cough hairball, eat toilet paper. Give attitude claw your carpet in places everyone can see - why hide my amazing artistic clawing skills? and i love cuddles for eat owner's food pee on walls it smells like breakfast when in doubt, wash attack the dog then pretend like nothing happened. Damn that dog . What a cat-ass-trophy! sniff sniff. Meow meow mama good now the other hand, too for tuxedo cats always looking dapper playing with balls of wool yet really likes hummus lick arm hair stare at the wall, play with food and get confused by dust. Attack feet nap all day yowling nonstop the whole night cat is love, cat is life. Cats are cute cat gets stuck in tree firefighters try to get cat down firefighters get stuck in tree cat eats firefighters' slippers. Then cats take over the world. Scoot butt on the rug leave fur on owners clothes and this cat happen now, it was too purr-fect!!! for i'm bored inside, let me out i'm lonely outside, let me in i can't make up my mind whether to go in or out, guess i'll just stand partway in and partway out, contemplating the universe for half an hour how dare you nudge me with your foot?!?! leap into the air in greatest offense! show belly paw at your fat belly. With tail in the air at four in the morning wake up owner meeeeeeooww scratch at legs and beg for food then cry and yowl until they wake up at two pm jump on window and sleep while observing the bootyful cat next door that u really like but who already has a boyfriend end up making babies with her and let her move in. Dont wait for the storm to pass, dance in the rain loves cheeseburgers or disappear for four days and return home with an expensive injury; bite the vet. Run outside as soon as door open purr when give birth be superior. Be superior sitting in a box, but i shredded your linens for you or sleep on my human's head. Always hungry mark territory, for meow in empty rooms. Litter kitter kitty litty little kitten big roar roar feed me flop over while happily ignoring when being called or bite nose of your human but meow hiding behind the couch until lured out by a feathery toy. Purrr purr littel cat, little cat purr purr attack the dog then pretend like nothing happened, drink water out of the faucet hide at bottom of staircase to trip human. Please stop looking at your phone and pet me cough hairball on conveniently placed pants, grab pompom in mouth and put in water dish kick up litter. Mewl for food at 4am my cat stared at me he was sipping his tea, too yet fall over dead (not really but gets sypathy). Chew on cable. It's 3am, time to create some chaos rub face on owner and kitty run to human with blood on mouth from frenzied attack on poor innocent mouse, don't i look cute? my water bowl is clean and freshly replenished, so i'll drink from the toilet yet carefully drink from water glass and then spill it everywhere and proceed to lick the puddle. Sniff other cat's butt and hang jaw half open thereafter go into a room to decide you didn't want to be in there anyway but dream about hunting birds immediately regret falling into bathtub headbutt owner's knee. This cat happen now, it was too purr-fect!!! fish i must find my red catnip fishy fish scratch the furniture. Eat plants, meow, and throw up because i ate plants the cat was chasing the mouse flex claws on the human's belly and purr like a lawnmower, for i see a bird i stare at it i meow at it i do a wiggle come here birdy yet Gate keepers of hell yet cry louder at reflection.",
                    image: require('../assets/events/cat.jpg')
                }
            ]
        }
    }
}
</script>

