export enum SolutionState {
    Success = "success",
    Failed = "failed",
    BuildError = "build-error",
    Timeout = "timeout"
}

export type SolutionStateInfo = { name: string, cn: string, badgeCN: string, description: string }
export const SolutionStateInfos: { [key in SolutionState]: SolutionStateInfo } = {
    [SolutionState.Success]: { name: "Başarılı", cn: "text-success", badgeCN: "badge-success", description: "Çözümünüz tüm testlerden başarılı bir şekilde geçti." },
    [SolutionState.Failed]: { name: "Başarısız", cn: "text-error", badgeCN: "badge-error", description: "Çözümünüz testlerden geçemedi." },
    [SolutionState.BuildError]: { name: "Build Hatası", cn: "text-error-content", badgeCN: "badge-error-content", description: "Çözümünüz derlenirken hata oluştu." },
    [SolutionState.Timeout]: { name: "Zaman Aşımı", cn: "text-warning", badgeCN: "badge-warning", description: "Çözümünüz belirlenen sürede tamamlanamadı." },
}