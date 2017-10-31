import React from 'react';

export const questions = [
  {
    "question": (
      <span>
        A recent survey was done consisting of 995 female participants, and 5 male. The following description was chosen at random:
        <br/><br/>
        <i>
          Jordan is 24 years old and is finishing a degree in engineering.
          On Friday nights, Jordan likes to go out cruising with friends while listening to loud music and drinking beer.
        </i>
        <br/><br/>
        Which one of the following statements is most likely?
      </span>
    ),
    "answers": [
      <span>Jordan is a man</span>,
      <span>Jordan is a woman</span>
    ],
    "correct": "Jordan is a woman",
    "explanation": (
      <span>
        This is an example of the <strong>base rate fallacy</strong>. Given the size of the group, the probability of choosing someone at random
        who is a woman is 99.5%. However, intuitively many people will be prone to choose the other option because the description fits their
        stereotypical ideas of male behavior.
        <br/><br/>
        In a similar study only 20% of participants gave the right answer
        <br/>
        <i>De Neys, W., Cromheeke, S., & Osman, M. (2011). Biased but in Doubt: Conflict and Decision Confidence</i>
      </span>
    ),
  }/*,
  {
    "question": (
        <span>
          Imagine a young woman named Linda who was 30 years old, single, outspoken, and very bright. She majored in literature. As a student, she was deeply concerned with issues of discrimination and social justice, and also participated in anti-nuclear demonstrations.
          <br/><br/>
          Which one of the following statements is most likely?
        </span>
      ),
      "answers": [
        <span>Linda works in an IT company</span>,
        <span>Linda works in an IT company and she’s active in the feminist movement</span>
      ],
      "correct": "Linda works in an IT company",
      "explanation": (
        <span>
          This is an example of the <strong>conjunction fallacy</strong>. Let's say there are 100 people who work in IT companies.
          We can easily see that there can't be more than 100 people who are feminists <strong>and</strong> work in an IT company.
          Therefore, the probability of the first option must always be greater than or equal to the second.
          <br/><br/>
          In a similar study only 15% of participants gave the right answer
          <br/>
          <i>Moutier, S., & Houdé, O. (2003). Judgement under uncertainty and conjunction fallacy inhibition training.</i>
        </span>
      ),
  },
  {
    "question": (
        <span>
          Consider the following statements:
          <ul>
            <li>All roses are flowers</li>
            <li>Some flowers fade quickly</li>
            <li>Therefore, some roses fade quickly</li>
          </ul>
          Would you consider this valid?
        </span>
      ),
      "answers": [
        <span>Yes</span>,
        <span>No</span>
      ],
      "correct": "No",
      "explanation": (
        <span>
          It's possible for there to be no roses in the set of flowers that fade quickly.
          This means that we can't gurantee some roses fade quickly.
        </span>
      ),
  },
  {
    "question": (
        <span>
          A certain town is served by two hospitals. In the larger hospital about 45 babies are born each day, and in the smaller hospital about 15 babies are born each day. As you know, about 50% of all babies are boys. However, the exact percentage varies from day to day. Sometimes it may be higher than 50%, sometimes lower. For a period of 1 year, each hospital recorded the days on which more than 60% of the babies born were boys.
          <br/><br/>
          Which hospital do you think recorded more such days?
        </span>
      ),
      "answers": [
        <span>The larger</span>,
        <span>The smaller</span>,
        <span>About the same (within 5% of each other)</span>
      ],
      "correct": "The smaller",
      "explanation": (
        <span>
          In a study, the number of participants who gave each answer were:
          <ol>
            <li>22.15%</li>
            <li>22.15%</li>
            <li>55.7%</li>
          </ol>
          Getting this right requires seeing that smaller numbers of observations tend to have higher variance. Imagine a hospital that usually has 4 babies born each day. If only 3 are born one day, that's a 25% difference from the average. However, in a hospital where 100 babies are usually born, a 1 baby difference is only 1%. Thus, as a hospital increases the number of births per day, the ratio of boys to girls tends more towards 50/50.
        </span>
      ),
  },
  {
    "question": (
        <span>
          Tall parents, on average, have children that are shorter than themselves and short parents have children that are taller than themselves.
          <br/><br/>
          Is this statement True?
        </span>
      ),
      "answers": [
        <span>Yes</span>,
        <span>No</span>,
      ],
      "correct": "Yes",
      "explanation": (
        <span>
          This is an example of <strong>regression fallacy</strong>. When an event occurs away from the average, it is likely that on its next measurement will be closer to the average.
          We tend to make mistakes here when we underestimate the role of chance in an event. In this case it's easy to give too much weight to genetics in determining height, rather
          than considering the parents to be outliers. Francis Galton, cousin of Charles Darwin, first observed this in the late 1800s when he measured the heights of parents and their children.
        </span>
      ),
  }
*/
];
