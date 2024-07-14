import { create } from 'zustand';

type StepStore = {
  currentStepId?: string;
  addStepBefore: boolean;
  addStepAfter: boolean;

  addStepModalOpened: boolean;
  CloseAddStepModal: () => void;
  AddStepBefore: ({ stepId }: { stepId: string }) => void;
  AddStepAfter: ({ stepId }: { stepId: string }) => void;

  editSepModalOpened: boolean;
  OpenEditStepModal: (currentStepId: string) => void;
  CloseEditStepModal: () => void;

  newStepName: string;
  SetNewStepName: (value: string) => void;

  Clear: () => void;
};

export const useStepStore = create<StepStore>()((set) => ({
  addStepBefore: false,
  addStepAfter: false,

  addStepModalOpened: false,
  CloseAddStepModal() {
    set(() => ({
      addStepBefore: false,
      addStepAfter: false,
      currentStepId: undefined,
      addStepModalOpened: false,
    }));
  },
  AddStepBefore({ stepId }) {
    set(() => ({
      currentStepId: stepId,
      addStepBefore: true,
      addStepModalOpened: true,
    }));
  },
  AddStepAfter({ stepId }) {
    set(() => ({
      currentStepId: stepId,
      addStepAfter: true,
      addStepModalOpened: true,
    }));
  },

  editSepModalOpened: false,
  OpenEditStepModal(currentStepId) {
    set(() => ({
      currentStepId,
      editSepModalOpened: true,
    }));
  },
  CloseEditStepModal() {
    set(() => ({
      currentStepId: undefined,
      editSepModalOpened: false,
    }));
  },

  newStepName: 'New Step',
  SetNewStepName(value: string) {
    set(() => ({
      newStepName: value !== '' ? value : 'New Step',
    }));
  },

  Clear() {
    set(() => ({
      currentStepId: undefined,

      addStepModalOpened: false,
      editSepModalOpened: false,
    }));
  },
}));
