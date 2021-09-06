<template>
  <div class="">
    <div class="horizontal-snap grid grid-flow-col gap-12 p-6">
      <div class="" v-for="reward in rewards.data" :key="reward.id">
        <div>
          <rewards-image
            class="reward"
            
            :dailyStepsActual="reward.dailyStepsActual"
            :dailyStepsRequired="reward.dailyStepsRequired"
            :rewardPointsActual="reward.rewardPointsActual"
            :rewardPointsRequired="reward.rewardPointsRequired"
            :rewardImage="reward.rewardImage"
          />

          <span class="text-3xl font-bold text-gray-500">{{
            reward.date
          }}</span>

          <rewards-text
            :id="reward.id"
            :title="reward.title"
            :state="reward.state"
            :description="reward.description"
            :points="reward.points"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import RewardsImage from "@/components/rewards/RewardsImage.vue";
import RewardsText from "@/components/rewards/RewardsText.vue";
import rewards from "@/data/rewards.json";

export default {
  components: { RewardsImage, RewardsText },
  data() {
    return {
      date: "Today",
      rewards: rewards,
    };
  },
};
</script>

<style scoped>
.horizontal-snap {
  overflow-y: auto;
  overscroll-behavior-x: contain;
  scroll-snap-type: x mandatory;
}

.horizontal-snap > div {
  scroll-snap-align: center;
}

.horizontal-snap img {
  width: 180px;
  max-width: none;
  object-fit: contain;
  border-radius: 1rem;
}

::-webkit-scrollbar {
  width: 18px;
  height: 3px;
  padding-left: 30px;
  scroll-margin: 2em;
}
::-webkit-scrollbar-track {
  background: #cbeffb;
  border-right: 20px white solid;
  border-left: 20px white solid;
}
::-webkit-scrollbar-thumb {
  background: #00adef;
}
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>
