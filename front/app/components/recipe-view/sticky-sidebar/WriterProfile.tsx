import styled from "styled-components";
import Image from "next/image";
import useMovingContentByScrolling from "@/app/hooks/useMovingContentByScrolling";

type WriterProfileProps = {
  user_nickname: string;
};

const WriterProfile: React.FC<WriterProfileProps> = ({ user_nickname }) => {
  const isHeaderVisible = useMovingContentByScrolling();

  return (
    <>
      <ProfileContainerDiv isHeaderVisible={isHeaderVisible}>
        <ProfileHeaderDiv>오늘의 요리사</ProfileHeaderDiv>
        <ProfileContentsDiv>
          {/* 프로필 사진 */}
          <ProfileImageDiv>
            <Image
              src="/images/recipe-view/limeorange.PNG"
              alt="게시글 작성자 프로필 사진"
              width={130}
              height={130}
              style={{ objectFit: "cover", cursor: "pointer" }}
            />
          </ProfileImageDiv>

          {/* 닉네임 */}
          <NicknameSpan>{user_nickname}</NicknameSpan>

          {/* 팔로잉, 팔로워 */}
          <FollowDiv>
            <span>팔로잉</span>
            <BoldSpan>99</BoldSpan>
            <span>|</span>
            <span>팔로잉</span>
            <BoldSpan>50</BoldSpan>
          </FollowDiv>
          <FollowButton>팔로우</FollowButton>
        </ProfileContentsDiv>
      </ProfileContainerDiv>
    </>
  );
};

/** 프로필 박스 전체 감싸는 Div */
const ProfileContainerDiv = styled.div<{ isHeaderVisible: boolean }>`
  display: flex;
  flex-direction: column;
  position: fixed;
  width: 18.5rem;
  height: 33rem;
  left: 116rem;
  top: 20.15rem;
  box-shadow: 0 0 0.3rem rgba(0, 0, 0, 0.3);
  border-radius: 2rem;

  transform: ${(props) =>
    props.isHeaderVisible ? "translateY(0)" : "translateY(-131px)"};
  transition: transform 0.3s ease-in-out;
`;

/** 프로필 헤더 박스 Div */
const ProfileHeaderDiv = styled.div`
  width: 18.5rem;
  height: 4.3rem;
  background: #fbe2a1;
  border-radius: 20px 20px 0px 0px;
  font-weight: 500;
  font-size: 17px;
  color: #4f3d21;
  padding: 1rem;
  padding-left: 1.5rem;
`;

/** 프로필 내용 담는 Div */
const ProfileContentsDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1.9rem;
`;

/** 프로필 이미지 감싸는 Div */
const ProfileImageDiv = styled.div`
  width: 13rem;
  height: 13rem;
  margin-right: 0.6rem;
  margin-bottom: 1.3rem;
  box-shadow: 0 0 0.3rem rgba(0, 0, 0, 0.3);
  border-radius: 50%;
  overflow: hidden;
`;

/** 닉네임 Span */
const NicknameSpan = styled.span`
  font-size: 1.8rem;
  font-weight: 500;
  color: #4f3d21;
  margin-bottom: 0.4rem;
`;

/** 팔로잉, 팔로워 Div */
const FollowDiv = styled.div`
  display: flex;
  color: #4f3d21;
  font-size: 1.5rem;
  gap: 0.3rem;
  margin-bottom: 1.65rem;
`;

/** 팔로잉, 팔로워수 강조 Span */
const BoldSpan = styled.span`
  font-weight: 500;
`;

/** 팔로우 버튼 */
const FollowButton = styled.button`
  width: 14rem;
  height: 3.5rem;
  font-size: 16px;
  font-weight: 500;
  background-color: #fbe2a1;
  color: #4f3d21;
  border-radius: 1rem;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #fbd26a;
  }
`;

export default WriterProfile;
