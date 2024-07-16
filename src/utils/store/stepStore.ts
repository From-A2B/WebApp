import { create } from 'zustand';

type StepStore = {
  currentStepId?: string;
  currentTripId?: string;
  addStepBefore: boolean;
  addStepAfter: boolean;
  currentStepName?: string;

  addStepModalOpened: boolean;
  CloseAddStepModal: () => void;
  AddStepBefore: ({
    stepId,
    tripId,
  }: {
    stepId: string;
    tripId: string;
  }) => void;
  AddStepAfter: ({
    stepId,
    tripId,
  }: {
    stepId: string;
    tripId: string;
  }) => void;

  newStepName: string;
  SetNewStepName: (value: string) => void;

  deleteModalOpened: boolean;
  OpenDeleteModal: ({
    tripId,
    stepId,
    stepName,
  }: {
    tripId: string;
    stepId: string;
    stepName: string;
  }) => void;
  CloseDeleteModal: () => void;

  editModalOpened: boolean;
  OpenEditModal: ({ stepId }: { stepId: string }) => void;
  CloseEditModal: () => void;
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
      currentTripId: undefined,
      addStepModalOpened: false,
      newStepName: 'New Step',
    }));
  },
  AddStepBefore({ stepId, tripId }) {
    set(() => ({
      currentStepId: stepId,
      currentTripId: tripId,
      addStepBefore: true,
      addStepModalOpened: true,
    }));
  },
  AddStepAfter({ stepId, tripId }) {
    set(() => ({
      currentStepId: stepId,
      currentTripId: tripId,
      addStepAfter: true,
      addStepModalOpened: true,
    }));
  },

  deleteModalOpened: false,
  OpenDeleteModal({ tripId, stepId, stepName }) {
    set(() => ({
      currentTripId: tripId,
      currentStepId: stepId,
      currentStepName: stepName,
      deleteModalOpened: true,
    }));
  },

  CloseDeleteModal() {
    set(() => ({
      currentStepId: undefined,
      currentStepName: undefined,
      deleteModalOpened: false,
    }));
  },

  editModalOpened: false,
  OpenEditModal({ stepId }) {
    set(() => ({
      currentStepId: stepId,
      editModalOpened: true,
    }));
  },
  CloseEditModal() {
    set(() => ({
      currentStepId: undefined,
      editModalOpened: false,
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
      currentStepName: undefined,

      addStepModalOpened: false,
      editSepModalOpened: false,
    }));
  },
}));
