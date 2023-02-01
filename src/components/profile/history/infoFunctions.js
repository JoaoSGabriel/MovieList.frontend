function countTimer(info) {
  const start = new Date(info.createdAt);
  const end = new Date();
  const totalDiff = new Date(end - start);

  if (totalDiff.getUTCHours() < 1 && totalDiff.getUTCMinutes() < 6) {
    return "Agora mesmo";
  } else if (totalDiff.getUTCHours() < 1) {
    let diff = totalDiff.getUTCMinutes() + "min ";

    return `Há ${diff} atrás`;
  } else if (totalDiff.getUTCHours() === 1) {
    let diff = totalDiff.getUTCHours() + " hora ";

    return `Há ${diff} atrás`;
  } else if (totalDiff.getUTCHours() > 1) {
    let diff = totalDiff.getUTCHours() + " horas ";

    return `Há ${diff} atrás`;
  } else if (totalDiff.getUTCHours() >= 23) {
    const diffInMs = new Date(end) - new Date(start);
    const diffInDays = diffInMs / (1000 * 60 * 60 * 24);

    return `Há ${diffInDays} dia(s) atrás`;
  }

  return "empty";
}

function searchPosterPath(info) {
  if (info?.type === "LIKED") {
    return `${info.MovieFavorits[0]?.tmbdPoster_path}`;
  } else if (info?.type === "PLANNING") {
    return `${info.PlaningSee[0]?.tmbdPoster_path}`;
  } else if (info?.type === "WATCHED") {
    return `${info.Watched[0]?.tmbdPoster_path}`;
  }
}

const infoFunctions = {
  countTimer,
  searchPosterPath,
};

export default infoFunctions;
