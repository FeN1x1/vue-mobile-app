<template>
  <div class="pb-20">
    <div
      data-aos="fade-down"
      data-aos-mirror="true"
      class="text-palette-blue-3 text-xl font-bold dailySteps"
    >
      Daily steps
      <span class="test"> {{ dailyStepsActual }}</span>
      out of {{ dailyStepsRequired }}
    </div>
    <img
      :src="require(`@/assets/rewards/${rewardImage}`)"
      alt="reward"
      class="rounded-full max-w-xs m-auto"
    />
    <div
      data-aos="fade-up"
      data-aos-once="false"
      class="text-pink-500 text-xl font-bold rewardPoints"
    >
      Reward goal {{ rewardPointsActual }} out of
      {{ rewardPointsRequired }} points
    </div>
  </div>
</template>

<script>
import ArcText from "arc-text";

export default {
  data() {
    return {};
  },

  props: {
    dailyStepsActual: {
      type: Number,
      required: true,
    },
    dailyStepsRequired: {
      type: Number,
      required: true,
    },
    rewardPointsActual: {
      type: Number,
      required: true,
    },
    rewardPointsRequired: {
      type: Number,
      required: true,
    },
    rewardImage: {
      type: String,
      default: "defaultCup.jpg",
    },
  },
  mounted() {
    const divArrayDailySteps = document.getElementsByClassName("dailySteps");
    const divArrayRewardPoints = document.getElementsByClassName(
      "rewardPoints"
    );

    for (let i = 0; i < divArrayDailySteps.length; i++) {
      const dailyStepsArc = new ArcText(divArrayDailySteps[i]);
      dailyStepsArc.arc(200);
      const rewardPointsArc = new ArcText(divArrayRewardPoints[i]);
      rewardPointsArc.direction(-1);
      rewardPointsArc.arc(200);
    }
  },
};
</script>
